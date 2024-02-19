import { Test, TestingModule } from '@nestjs/testing';
import { MyApp3Controller } from './my-app3.controller';
import { MyApp3Service } from './my-app3.service';

describe('MyApp3Controller', () => {
  let myApp3Controller: MyApp3Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MyApp3Controller],
      providers: [MyApp3Service],
    }).compile();

    myApp3Controller = app.get<MyApp3Controller>(MyApp3Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(myApp3Controller.getHello()).toBe('Hello World!');
    });
  });
});
