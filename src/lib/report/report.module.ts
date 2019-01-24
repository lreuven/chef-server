import { HttpModule, Logger, Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule,
    PassportModule.register({ defaultStrategy: 'bearer' }),
  ],
  controllers: [ReportController],
  providers: [ReportService, Logger]
})
export class ReportModule {}
