import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as _ from 'lodash';
import { AuthGuard } from '@nestjs/passport';
import { RosService } from '../services/ros/ros.service';

@Injectable()
export class RosGuard extends AuthGuard('bearer') {

  constructor(private readonly rosService: RosService) {
    super();
  }

  private rosOrganization: string;
  private token: string;

  canActivate(context: ExecutionContext) {

    const request = context.switchToHttp().getRequest();
    const headers = request.headers;

    this.rosOrganization = _.get(request, ['headers', 'ros-organization'], undefined);
    this.token = _.get(request, ['headers', 'authentication'], undefined);

    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }

    if (this.rosOrganization) {
      if (user.isStaff) {
        _.set(user, ['organization'], {});
        _.set(user, ['organization', 'id'], this.rosOrganization);
      } else {
        const memberships = _.filter(user.memberships, { active: true });
        const rosOrganization = _.find(memberships, { organization: this.rosOrganization });
        if (rosOrganization) {
          _.set(user, 'organization', rosOrganization);
        } else {
          throw new UnauthorizedException();
        }
      }
    }

    return user;
  }
}
