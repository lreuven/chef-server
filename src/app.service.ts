import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  async root() {
    console.log(Date.now().toString());
    return 'it\'s Alive!';
  }
}
