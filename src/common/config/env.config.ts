import { z } from 'zod';

export const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),

  APP_NAME: z.string().default('Attendr'),

  BASE_URL: z.url().default('http://localhost:3000'),

  PORT: z.coerce.number().default(3000),

  FRONTEND_URL: z.string({ message: 'FRONTEND_URL is required' }),

  BETTER_AUTH_SECRET: z.string({ message: 'BETTER_AUTH_SECRET is required' }),

  BETTER_AUTH_URL: z.url().default('http://localhost:3000/api/auth'),

  DATABASE_URL: z.url({
    message: 'DATABASE_URL must be a valid connection string',
  }),

  REDIS_URL: z.url({ message: 'REDIS_URL must be a valid URL' }),

  BREVO_API_KEY: z.string({ message: 'BREVO_API_KEY is required' }),

  SMTP_MAIL_FROM: z.string({ message: 'SMTP_MAIL_FROM is required' }),
});

export type Env = z.infer<typeof envSchema>;

export function validateEnv(config: Record<string, unknown>) {
  const result = envSchema.safeParse(config);

  if (!result.success) {
    console.error('Invalid environment configuration:');

    const errorProperties = z.treeifyError(result.error).properties || {};

    Object.entries(errorProperties).forEach(([envVar, data]) => {
      const typedData = data as { errors?: string[] };
      if (typedData?.errors && typedData.errors.length > 0) {
        console.error(`👉 ${envVar}: ${typedData.errors.join(', ')}`);
      }
    });

    throw new Error('Environment validation failed.');
  }

  return result.data;
}
