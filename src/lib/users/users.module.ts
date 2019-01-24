import { HttpModule, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { RosService } from '../../services/ros/ros.service';
import { Logger } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  providers: [UsersService, RosService, Logger],
  exports: [UsersService],
})
export class UsersModule {
}
