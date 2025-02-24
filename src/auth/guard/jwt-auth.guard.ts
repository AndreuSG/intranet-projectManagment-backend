import {ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const header = request.headers.authorization;
    return super.canActivate(context);
  }

  handleRequest(err, user) {
    if (err) throw err;
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
