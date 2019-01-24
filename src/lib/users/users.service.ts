import { Injectable, Logger } from '@nestjs/common';
import { RosService } from '../../services/ros/ros.service';
import * as _ from 'lodash';
import * as cacheManager from 'cache-manager';
import { ConfigService } from '../../config/config.service';

const TTL = 60;

@Injectable()
export class UsersService {

  memoryCache: any;

  constructor(private readonly rosService: RosService, private readonly logger: Logger, private readonly config: ConfigService) {
    this.memoryCache = cacheManager.caching({ store: 'memory', max: TTL, ttl: TTL/*seconds*/ });
  }

  async findOneByToken(token: string) {
    let user = await this.memoryCache.get(token);
    if (user) {
      return user;
    }
    else {
      let userAccount;
      let currentOrganization;
      try {
        userAccount = await this.rosService.get(this.config.rosUrl + '/account/me', token);
        currentOrganization = await this.rosService.get(this.config.rosUrl + '/organizations/current', token);
      }
      catch (e) {
        return;
      }

      user = _.get(userAccount, 'data');
      const organization = _.get(currentOrganization, 'data');
      if (user && organization) {
        _.set(user, 'organization', organization);
        this.memoryCache.set(token, user, { ttl: TTL }, (err) => {
        });
      }
    }

    return user;
  }
}
