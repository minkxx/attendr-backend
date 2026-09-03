import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { PollService } from './poll.service';
import { PollController } from './poll.controller';
import { PollingGateway } from './poll.gateway';
import { ConfigService } from '@nestjs/config';
import { PollSyncConsumer } from './poll-sync.consumer';
import Redis from 'ioredis';

@Module({
  imports: [
    BullModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const redisUrl = configService.get<string>('REDIS_URL');
        if (!redisUrl) throw new Error('REDIS_URL is missing!');

        return {
          connection: new Redis(redisUrl, {
            maxRetriesPerRequest: null,
          }),
        };
      },
      inject: [ConfigService],
    }),

    BullModule.registerQueue({
      name: 'poll-sync',
    }),
  ],
  controllers: [PollController],
  providers: [PollService, PollingGateway, PollSyncConsumer],
})
export class PollModule {}
