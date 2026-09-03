import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions, Server } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { INestApplicationContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

export class RedisIoAdapter extends IoAdapter {
  private adapterConstructor!: ReturnType<typeof createAdapter>;
  private readonly configService: ConfigService;

  constructor(appOrWithContext: INestApplicationContext) {
    super(appOrWithContext);
    this.configService = appOrWithContext.get(ConfigService);
  }

  async connectToRedis(): Promise<void> {
    const redisUrl = this.configService.get<string>('REDIS_URL');
    if (!redisUrl) throw new Error('REDIS_URL is missing!');

    const pubClient = new Redis(redisUrl, {
      lazyConnect: true,
    });
    const subClient = pubClient.duplicate();

    pubClient.on('error', (err: Error) =>
      console.error('Redis Pub Client Error', err),
    );
    subClient.on('error', (err: Error) =>
      console.error('Redis Sub Client Error', err),
    );

    await Promise.all([pubClient.connect(), subClient.connect()]);

    this.adapterConstructor = createAdapter(pubClient, subClient);
  }

  override createIOServer(port: number, options?: ServerOptions): Server {
    const server = super.createIOServer(port, options) as Server;
    server.adapter(this.adapterConstructor);
    return server;
  }
}
