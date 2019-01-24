import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as _ from 'lodash';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {
  }

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return false;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (user.isStaff === true) {
      return true;
    }

    const memberships = _.filter(user.memberships, { active: true });
    const currentMembership = _.find(memberships, {organization: user.organization.id});
    const hasRole = currentMembership && roles.indexOf(currentMembership.role) !== -1;
    return user && hasRole;
  }
}