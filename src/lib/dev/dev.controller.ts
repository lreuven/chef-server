import { Controller, Req, Get, Post, Body, Put, Param, Delete, Query, UseGuards, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DevService } from './dev.service';
import { ConfigService } from '../../config/config.service';

@Controller('dev')
export class DevController {
  constructor(
    private readonly devService: DevService,
    private readonly logger: Logger,
    private readonly config: ConfigService,
  ) {
  }

  @Post()
  create(@Body() createCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  @UseGuards(AuthGuard())
  findAll(@Query() query, @Req() request) {
    // this.logger.log(request, 'got request');
    return this.devService.findAll();
  }

  @Get('/test')
  @UseGuards(AuthGuard())
  async queryTest(@Query() query, @Req() request) {
    // this.logger.log(request, 'got request');
    return await this.devService.runProcedure('stp_ReportItems', {
      siteId: '53eb1ee2e6c77111203d8503',
      fromBusinessDate: '20190121',
      toBusinessDate: '20190122',
    });
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.config.databaseUser;
  }

  @Put(':id')
  update(@Param('id') id, @Body() updateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return `This action removes a #${id} cat`;
  }
}