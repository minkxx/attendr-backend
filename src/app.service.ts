import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  home() {
    return {
      message: 'attendr-backend is running!',
    };
  }

  getHealth() {
    return {
      message: 'Server healthy!',
    };
  }
}
