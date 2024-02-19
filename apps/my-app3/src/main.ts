import { NestFactory } from '@nestjs/core';
import { MyApp3Module } from './my-app3.module';

async function bootstrap() {
  const app = await NestFactory.create(MyApp3Module);
  await app.listen(3000);
}
bootstrap();
