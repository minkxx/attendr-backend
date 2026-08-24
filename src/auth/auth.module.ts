import { Module, OnModuleInit } from '@nestjs/common';
import { AuthModule as NestjsBetterAuthModule } from '@thallesp/nestjs-better-auth';
import { EmailModule } from '../email/email.module';
import { EmailService } from '../email/email.service';

import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaClient } from '../common/generated/prisma/client';
import { DATABASE_CONNECTION } from '../database/database-connection';
import { expo } from '@better-auth/expo';

const authExtensions = {
  sendEmail: null as
    null | ((to: string, url: string, name: string) => Promise<void>),
};

@Module({
  imports: [
    EmailModule,
    NestjsBetterAuthModule.forRootAsync({
      useFactory: (prismaClient: PrismaClient) => ({
        auth: betterAuth({
          database: prismaAdapter(prismaClient, {
            provider: 'postgresql',
          }),
          baseURL: process.env.BASE_URL,

          emailAndPassword: {
            enabled: true,
          },

          emailVerification: {
            sendOnSignUp: true,
            async sendVerificationEmail({
              user,
              url,
            }: {
              user: { email: string; name: string };
              url: string;
            }) {
              if (authExtensions.sendEmail) {
                await authExtensions.sendEmail(user.email, url, user.name);
              } else {
                throw new Error(
                  'EmailService not initialized — sendVerificationEmail called before AuthModule.onModuleInit',
                );
              }
            },
          },

          plugins: [expo()],

          trustedOrigins: [
            process.env.FRONTEND_URL ?? '',
            ...(process.env.NODE_ENV === 'development'
              ? [
                  'exp://', // Trust all Expo URLs (prefix matching)
                  'exp://**', // Trust all Expo URLs (wildcard matching)
                  'exp://192.168.*.*:*/**', // Trust 192.168.x.x IP range with any port and path
                ]
              : []),
          ],

          advanced: {
            disableOriginCheck: true,
            useSecureCookies: process.env.NODE_ENV === 'production',
          },
        }),
      }),
      inject: [DATABASE_CONNECTION],
    }),
  ],
  exports: [NestjsBetterAuthModule],
})
export class AuthModule implements OnModuleInit {
  constructor(private readonly emailService: EmailService) {}

  onModuleInit() {
    authExtensions.sendEmail = async (to, url, name) => {
      await this.emailService.sendVerificationEmail(to, url, name);
    };
  }
}
