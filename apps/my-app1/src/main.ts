import { NestFactory } from '@nestjs/core';
import { MyApp1Module } from './my-app1.module';

async function bootstrap() {
  const app = await NestFactory.create(MyApp1Module);
  await app.listen(3001);
}
bootstrap();
