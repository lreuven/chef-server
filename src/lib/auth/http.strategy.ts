import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {

  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(token: string, context: ExecutionContext) {
    const user = await this.authService.getUser(token);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}