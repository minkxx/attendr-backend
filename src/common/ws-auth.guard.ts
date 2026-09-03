import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Inject,
  Logger,
} from '@nestjs/common';
import { WsException } from '@nestjs/websockets';
import { Socket, type DefaultEventsMap } from 'socket.io';
import { DATABASE_CONNECTION } from '../database/database-connection';
import { PrismaClient, type User } from '../common/generated/prisma/client';

interface AuthenticatedSocketData {
  user: User;
}

export type AuthenticatedSocket = Socket<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap,
  AuthenticatedSocketData
>;

@Injectable()
export class WsAuthGuard implements CanActivate {
  private readonly logger = new Logger(WsAuthGuard.name);

  constructor(
    @Inject(DATABASE_CONNECTION) private readonly prisma: PrismaClient,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const client: AuthenticatedSocket = context.switchToWs().getClient();

    const rawHeaders = client.handshake.headers.cookie;

    if (!rawHeaders) {
      this.logger.warn(
        `WS Connection rejected: No cookies found for socket ${client.id}`,
      );
      throw new WsException('Unauthorized: Missing session context.');
    }

    try {
      const match = rawHeaders.match(
        /(?:^|; )better-auth\.session_token=([^;]*)/,
      );
      const sessionToken = match
        ? decodeURIComponent(match[1]).split('.')[0]
        : null;

      if (!sessionToken) {
        this.logger.warn(
          `WS Connection rejected: better-auth session cookie not found`,
        );
        throw new WsException(
          'Unauthorized: Active session cookie not detected.',
        );
      }

      const session = await this.prisma.session.findUnique({
        where: { token: sessionToken },
        include: { user: true },
      });

      if (
        !session ||
        !session.user ||
        session.expiresAt.getTime() < Date.now()
      ) {
        this.logger.warn(
          `WS Connection rejected: Session is either invalid, dead or expired`,
        );
        throw new WsException(
          'Unauthorized: Session is invalid or has expired.',
        );
      }

      client.data.user = session.user;
      return true;
    } catch (error) {
      this.logger.error(
        `Authentication error in WS Session Guard`,
        error instanceof Error ? error.message : String(error),
      );
      throw new WsException('Unauthorized connection target.');
    }
  }
}
