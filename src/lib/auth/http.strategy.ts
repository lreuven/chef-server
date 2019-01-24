import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Reflector } from '@nestjs/core';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService, private readonly reflector: Reflector) {
    super();
  }

  async validate(token: string) {
    const user = await this.authService.getUser(token);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}