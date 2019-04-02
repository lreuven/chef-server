import { CacheModule, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { Logger } from '@nestjs/common';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    CacheModule.register(),
    UsersModule,
    PassportModule.register(
      {
        defaultStrategy: 'bearer',
        session: false,
      },
    ),
  ],
  providers: [AuthService, HttpStrategy, Logger],
  controllers: [AuthController],
})
export class AuthModule {
}