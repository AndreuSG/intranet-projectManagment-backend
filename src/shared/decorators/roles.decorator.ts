import { SetMetadata } from '@nestjs/common';
import { USER_ROLE } from '../enums/user.role';

export const Roles = (roles: USER_ROLE[]) => SetMetadata('roles', roles);
