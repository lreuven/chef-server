import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  async root() {
    console.log(Date().toString());
    return 'it\'s Alive!! !!!';
  }
}
