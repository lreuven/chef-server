import { HttpModule, Logger, Module } from '@nestjs/common';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule,
    PassportModule.register({ defaultStrategy: 'bearer' }),
  ],
  controllers: [ReportsController],
  providers: [ReportsService, Logger]
})
export class ReportsModule {}
