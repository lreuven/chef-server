import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import * as _ from 'lodash';
import { throwError } from 'rxjs';

export enum REPORT_STRATEGIES {
  STORED_PROCEDURE
}

@Injectable()
export class ReportsService {

  constructor(
    @InjectConnection('dwh')
    private readonly connection: Connection,
  ) {
  }

  async getReport(name, params, strategy: REPORT_STRATEGIES) {
    switch (strategy) {
      case REPORT_STRATEGIES.STORED_PROCEDURE:
        const queryResponse = await this.connection.query('EXEC ' + name + ' @jsonCreteria = N\'' + JSON.stringify(params) + '\'');
        return JSON.parse(_.first(_.values(_.first(queryResponse))));
      default:
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Strategy does not exist',
        }, 403);
        break;
    }
  }

}
