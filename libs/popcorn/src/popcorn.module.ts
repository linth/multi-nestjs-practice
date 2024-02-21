import { Module } from '@nestjs/common';
import { PopcornService } from './popcorn.service';

@Module({
  providers: [PopcornService],
  exports: [PopcornService],
})
export class PopcornModule {}
