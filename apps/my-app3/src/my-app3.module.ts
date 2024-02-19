import { Module } from '@nestjs/common';
import { MyApp3Controller } from './my-app3.controller';
import { MyApp3Service } from './my-app3.service';

@Module({
  imports: [],
  controllers: [MyApp3Controller],
  providers: [MyApp3Service],
})
export class MyApp3Module {}
