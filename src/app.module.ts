import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { RoomModule } from './room/room.module';
import { validateEnv } from './common/config/env.config';
import { TimetableModule } from './timetable/timetable.module';
import { DatabaseModule } from './database/database.module';
import { AttendanceModule } from './attendance/attendance.module';
import { PollModule } from './poll/poll.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: validateEnv,
      isGlobal: true,
      envFilePath: [
        '.env.local',
        process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev',
      ],
    }),
    AuthModule,
    UserModule,
    DatabaseModule,
    RoomModule,
    TimetableModule,
    AttendanceModule,
    PollModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
