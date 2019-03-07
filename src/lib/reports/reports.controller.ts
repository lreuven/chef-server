import { Body, Controller, Get, Logger, Post, Query, Req, UseFilters, UseGuards } from '@nestjs/common';
import { ConfigService } from '../../config/config.service';
import { ReportsService, REPORT_STRATEGIES } from './reports.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../../guards/roles.guard';
import { Roles } from '../../guards/roles.decorator';
import * as _ from 'lodash';
import { AllExceptionsFilter } from '../../filters/exception.filter';

interface ReportParams {
  siteId: string;
  action: string;
}

@Controller('report')
@UseGuards(RolesGuard)
@UseGuards(AuthGuard())
@UseFilters(new AllExceptionsFilter())
export class ReportsController {
  constructor(
    private readonly reportService: ReportsService,
    private readonly logger: Logger,
    private readonly config: ConfigService,
  ) {
  }

  @Get('/item-sales')
  @Roles('manager')
  getItems(@Query() params: ReportParams, @Req() request) {
    params.siteId = _.get(request, ['user', 'organization', 'id'], '');
    return this.reportService.getReport('stp_ReportItems', params, REPORT_STRATEGIES.STORED_PROCEDURE);
  }

  @Get('/salesByOrganizationAndUser')
  @Roles('manager')
  getSalesByUser(@Query() params: ReportParams, @Req() request) {
    params.siteId = _.get(request, ['user', 'organization', 'id'], '');
    return this.reportService.getReport('stp_ApiSalesAndTips', params, REPORT_STRATEGIES.STORED_PROCEDURE);
  }

  @Get('/payments')
  @Roles('manager')
  getPayments(@Query() params: ReportParams, @Req() request) {
    params.siteId = _.get(request, ['user', 'organization', 'id'], '');
    params.action = 'payments';
    return this.reportService.getReport('stp_getdwhDataApi', params, REPORT_STRATEGIES.STORED_PROCEDURE);
  }

  @Get('/categories')
  @Roles('manager')
  getCategories(@Query() params: ReportParams, @Req() request) {
    params.siteId = _.get(request, ['user', 'organization', 'id'], '');
    params.action = 'categories';
    return this.reportService.getReport('stp_getdwhDataApi', params, REPORT_STRATEGIES.STORED_PROCEDURE);
  }

  @Get('/tlogs')
  @Roles('manager')
  getTlogs(@Query() params: ReportParams, @Req() request) {
    params.siteId = _.get(request, ['user', 'organization', 'id'], '');
    params.action = 'tlogs';
    return this.reportService.getReport('stp_getdwhDataApi', params, REPORT_STRATEGIES.STORED_PROCEDURE);
  }

  @Get('/refund')
  @Roles('manager')
  getRefund(@Query() params: ReportParams, @Req() request) {
    params.siteId = _.get(request, ['user', 'organization', 'id'], '');
    params.action = 'refund';
    return this.reportService.getReport('stp_getdwhDataApi', params, REPORT_STRATEGIES.STORED_PROCEDURE);
  }
  @Get('/reductionByReason')
  @Roles('manager')
  getReductionByReason(@Query() params: ReportParams, @Req() request) {
    params.siteId = _.get(request, ['user', 'organization', 'id'], '');
    params.action = 'reductionByReason';
    return this.reportService.getReport('stp_getdwhDataApi', params, REPORT_STRATEGIES.STORED_PROCEDURE);
    }

  @Get('/reductionByfiredBy')
  @Roles('manager')
  getReductionByFired(@Query() params: ReportParams, @Req() request) {
    params.siteId = _.get(request, ['user', 'organization', 'id'], '');
    params.action = 'reductionByfiredBy';
    return this.reportService.getReport('stp_getdwhDataApi', params, REPORT_STRATEGIES.STORED_PROCEDURE);
  }

  @Get('/mostLeastSoldItems')
  @Roles('manager')
  getMostLeastSoldItems(@Query() params: ReportParams, @Req() request) {
    params.siteId = _.get(request, ['user', 'organization', 'id'], '');
    params.action = 'mostLeastSoldItems';
    return this.reportService.getReport('stp_getdwhDataApi', params, REPORT_STRATEGIES.STORED_PROCEDURE);
  }

  @Get('/ReductionItemsByReason')
  @Roles('manager')
  getReductionItemsByReason(@Query() params: ReportParams, @Req() request) {
    params.siteId = _.get(request, ['user', 'organization', 'id'], '');
    params.action = 'ReductionByReason';

    _.set(params, 'items', JSON.parse(_.get(params, 'items')));

    return this.reportService.getReport('stp_getdwhDataApi', params, REPORT_STRATEGIES.STORED_PROCEDURE);
  }

  @Get('/reductionItemsByfired')
  @Roles('manager')
  getReductionItemsByFired(@Query() params: ReportParams, @Req() request) {
    params.siteId = _.get(request, ['user', 'organization', 'id'], '');
    params.action = 'ReductionByFiredBy';

    _.set(params, 'items', JSON.parse(_.get(params, 'items')));

    return this.reportService.getReport('stp_getdwhDataApi', params, REPORT_STRATEGIES.STORED_PROCEDURE);
  }
}
