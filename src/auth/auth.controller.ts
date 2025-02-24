import { API_BASE } from 'src/shared/constants/API';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from "@nestjs/common";

@Controller(`${API_BASE}/auth`)
export class AuthController {
    constructor(
        private readonly authService: AuthService,
    ) {}

    @Post('google')
    async googleLogin(@Body() body: { token: string }) {
        const { token } = body;
        return this.authService.loginWithGoogle(token);
    }
}

