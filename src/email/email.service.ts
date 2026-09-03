import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import nodemailer from 'nodemailer';
import type { Transporter } from 'nodemailer';
import escapeHtml from 'escape-html';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService implements OnModuleInit {
  private transporter: Transporter | null = null;
  private readonly logger = new Logger(EmailService.name);

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('SMTP_MAIL_HOST'),
      port: this.configService.get<number>('SMTP_MAIL_PORT'),
      auth: {
        user: this.configService.get<string>('SMTP_MAIL_USER'),
        pass: this.configService.get<string>('SMTP_MAIL_PASS'),
      },
    });
  }

  async onModuleInit() {
    if (!this.transporter) {
      throw Error('Email transporter not initiated!');
    }

    try {
      await this.transporter.verify();
      this.logger.log('SMTP connection verified');
    } catch (error) {
      this.logger.error('SMTP connection verification failed:', error);
      throw error;
    }
  }

  async sendVerificationEmail(to: string, url: string, name: string) {
    if (!this.transporter) {
      throw new Error('EmailService not initialized');
    }

    const safeName = escapeHtml(name || 'there');
    const safeUrl = new URL(url).href;

    const mailOptions = {
      from: `"${this.configService.get<string>('APP_NAME') || 'Attendr'}" <${this.configService.get<string>('SMTP_MAIL_FROM')}>`,
      to,
      subject: 'Verify your email address',
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2>Hello, ${safeName}!</h2>
          <p>Thank you for signing up. Please verify your email address by clicking the link below:</p>
          <a href="${safeUrl}" style="background-color: #0070f3; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 15px 0;">
            Verify Email
          </a>
          <p>If you did not request this email, you can safely ignore it.</p>
        </div>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      this.logger.error('Failed to send verification email:', error);
      throw error;
    }
  }
}
