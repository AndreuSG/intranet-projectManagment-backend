import { Injectable } from '@nestjs/common/decorators';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/domain/user/user.service';
import { GoogleService } from './google.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly googleService: GoogleService,
    ) {}

    async loginWithGoogle(idToken: string): Promise<{ access_token: string }> {
        const payload = await this.googleService.verify(idToken);

        if (!payload.email) {
            throw new Error('Google payload does not contain an email');
        }
        let user = await this.userService.findOneByUsername(payload.email);

        if (!user) {
            throw new Error('User not found');
        }

        // 3. Generar JWT propio con datos locales (id, role, etc)
        const tokenPayload = {
            id: user.id,
            username: user.usuari,
            role: user.tipus,
            admin: user.admin,
        };
        const access_token = this.jwtService.sign(tokenPayload);

        return { access_token };
    }
}

