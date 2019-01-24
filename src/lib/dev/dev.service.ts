import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository, InjectConnection } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entity/entities/user.entity';
import {Connection} from 'typeorm';
import * as _ from 'lodash';
@Injectable()
export class DevService {
  constructor(
    @InjectConnection('dwh')
    private readonly connection: Connection,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({ take: 10, order: { email: 1 } });
    // const test = 'CREATE PROCEDURE stp_test123456 as select 1 as x';
    // return await this.entityMa_.first(nager.query(test));
  }

  async runProcedure(procedureName, params) {
    // return await this.connection.query("select * from " + procedureName + " where businessDate = '20181220'");
    const response = await this.connection.query('EXEC ' + procedureName + ' @jsonCreteria = N\' ' + JSON.stringify(params) + ' \'');
    return JSON.parse(_.first(_.values(_.first(response))));
  }

}
