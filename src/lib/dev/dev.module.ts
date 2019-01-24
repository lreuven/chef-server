import { HttpModule, Logger, Module } from '@nestjs/common';
import { DevService } from './dev.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entity/entities/user.entity';
import { DevController } from './dev.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([User], 'dwh'),
    PassportModule.register({ defaultStrategy: 'bearer' }),
  ],
  providers: [DevService, Logger],
  controllers: [DevController],
  exports: [DevService],
})
export class DevModule {
  constructor() {
  }
}
