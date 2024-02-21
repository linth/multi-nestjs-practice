import { Injectable } from '@nestjs/common';

@Injectable()
export class PopcornService {
  getPopcorn() {
    console.log('get popcorn from PopcornService.');    
  }
}
