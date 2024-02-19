import { Injectable } from '@nestjs/common';

@Injectable()
export class MyApp3Service {
  getHello(): string {
    return 'Hello World!';
  }
}
