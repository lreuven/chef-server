import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import {Logger} from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private readonly logger: Logger) {}

  getUser(token: string): Promise<any> {
    return this.usersService.findOneByToken(token);
  }
}