import { PopcornService } from '@app/popcorn';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private popcornService: PopcornService) {}

  getHello(): string {
    this.popcornService.getPopcorn();
    return 'Hello World!';
  }
}
