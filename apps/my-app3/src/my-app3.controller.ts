import { Controller, Get } from '@nestjs/common';
import { MyApp3Service } from './my-app3.service';

@Controller()
export class MyApp3Controller {
  constructor(private readonly myApp3Service: MyApp3Service) {}

  @Get()
  getHello(): string {
    return this.myApp3Service.getHello();
  }
}
