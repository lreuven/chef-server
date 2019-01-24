import { Injectable } from '@nestjs/common';
import {HttpService} from '@nestjs/common';

@Injectable()
export class RosService {
  constructor(private httpService: HttpService) {
  }

  async get(url, token) {
    return await this.httpService.get(url, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }).toPromise();
  }
}
