import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as _ from 'lodash';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class RosGuard extends AuthGuard('bearer') {

  private rosOrganization: string;
  private token: string;

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    this.rosOrganization = _.get(request, ['headers', 'ros-organization']);
    this.token = _.get(request, ['headers', 'authentication']);

    return super.canActivate(context);
  }

  handleRequest(err, user) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }

    if (user.isStaff) {
      return user;
    }

    if (this.rosOrganization) {
      const memberships = _.filter(user.memberships, { active: true });
      const rosOrganization = _.find(memberships, { organization: this.rosOrganization });
      if (!rosOrganization) {
        throw new UnauthorizedException();
      }
    }

    return user;
  }
}
