import { Module } from '@nestjs/common';
import { AuthModule as NestjsBetterAuthModule } from '@thallesp/nestjs-better-auth';
import { EmailModule } from '../email/email.module';
import { EmailService } from '../email/email.service';

import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaClient } from '../common/generated/prisma/client';
import { DATABASE_CONNECTION } from '../database/database-connection';
import { expo } from '@better-auth/expo';

@Module({
  imports: [
    EmailModule,
    NestjsBetterAuthModule.forRootAsync({
      useFactory: (prismaClient: PrismaClient, emailService: EmailService) => ({
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
              await emailService.sendVerificationEmail(
                user.email,
                url,
                user.name,
              );
            },
          },

          plugins: [expo()],

          trustedOrigins: [
            process.env.FRONTEND_URL ?? '',
            ...(process.env.NODE_ENV === 'development'
              ? ['exp://', 'exp://**', 'exp://192.168.*.*:*/**']
              : []),
          ],

          advanced: {
            disableOriginCheck: true,
            useSecureCookies: process.env.NODE_ENV === 'production',
          },
        }),
      }),
      inject: [DATABASE_CONNECTION, EmailService],
    }),
  ],
  exports: [NestjsBetterAuthModule],
})
export class AuthModule {}
