import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PopcornModule } from '@app/popcorn';

@Module({
  imports: [PopcornModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
