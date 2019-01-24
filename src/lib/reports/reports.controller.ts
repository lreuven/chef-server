import { Body, Controller, Logger, Post, Req, UseGuards } from '@nestjs/common';
import { ConfigService } from '../../config/config.service';
import { ReportsService, REPORT_STRATEGIES } from './reports.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../guards/roles.guard';
import { Roles } from '../../guards/roles.decorator';
import * as _ from 'lodash';

interface ReportParams {
  siteId: string;
}

@Controller('report')
@UseGuards(RolesGuard)
@UseGuards(AuthGuard())
export class ReportsController {
  constructor(
    private readonly reportService: ReportsService,
    private readonly logger: Logger,
    private readonly config: ConfigService,
  ) {
  }

  @Post('/items')
  @Roles('manager', 'analytics')
  getItems(@Body() params: ReportParams, @Req() request) {

    params.siteId = _.get(request, ['user', 'organization', 'id'], '');

    return this.reportService.getReport('stp_ReportItems', params, REPORT_STRATEGIES.STORED_PROCEDURE);
  }
}
