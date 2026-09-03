import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import escapeHtml from 'escape-html';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private readonly brevoUrl = 'https://api.brevo.com/v3/smtp/email';

  constructor(private readonly configService: ConfigService) {}

  async sendVerificationEmail(to: string, url: string, name: string) {
    const apiKey = this.configService.get<string>('BREVO_API_KEY');
    const fromEmail = this.configService.get<string>('SMTP_MAIL_FROM');
    const appName = this.configService.get<string>('APP_NAME') || 'Attendr';

    if (!apiKey) {
      this.logger.error(
        'BREVO_API_KEY is not defined in your environment variables!',
      );
      return;
    }

    const safeName = escapeHtml(name || 'there');
    const safeUrl = new URL(url).href;

    const htmlContent = `
      <div style="font-family: sans-serif; padding: 20px; color: #333;">
        <h2>Hello, ${safeName}!</h2>
        <p>Thank you for signing up. Please verify your email address by clicking the link below:</p>
        <a href="${safeUrl}" style="background-color: #0070f3; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 15px 0;">
          Verify Email
        </a>
        <p>If you did not request this email, you can safely ignore it.</p>
      </div>
    `;

    try {
      const response = await fetch(this.brevoUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'api-key': apiKey,
        },
        body: JSON.stringify({
          sender: {
            name: appName,
            email: fromEmail,
          },
          to: [{ email: to, name: safeName }],
          subject: 'Verify your email address',
          htmlContent: htmlContent,
        }),
      });

      if (!response.ok) {
        const errorData = (await response.json()) as unknown;
        this.logger.error(`Brevo HTTP Error: ${JSON.stringify(errorData)}`);
        return;
      }

      this.logger.log(`Verification email sent successfully to ${to}`);
    } catch (error) {
      this.logger.error(
        'Failed to send verification email via Brevo API:',
        error,
      );
    }
  }
}
