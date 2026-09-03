import { Module, Global } from '@nestjs/common';
import Redis from 'ioredis';
import { REDIS_CLIENT } from './redis-client';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  providers: [
    {
      provide: REDIS_CLIENT,
      useFactory: (configService: ConfigService) => {
        const redisUrl = configService.get<string>('REDIS_URL');
        if (!redisUrl) throw new Error('REDIS_URL is missing!');

        return new Redis(redisUrl);
      },
      inject: [ConfigService],
    },
  ],
  exports: [REDIS_CLIENT],
})
export class RedisModule {}
