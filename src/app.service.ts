import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  async root() {
    return 'it\'s Alive!!';
  }
}
