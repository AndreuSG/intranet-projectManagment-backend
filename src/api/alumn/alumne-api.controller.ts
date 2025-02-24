import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AlumnApiService } from './alumn-api.service';
import { API_BASE } from 'src/shared/constants/API';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller(`${API_BASE}/alumnes`)
@UseGuards(JwtAuthGuard)
export class AlumnApiController {
    constructor(private readonly alumnApiService: AlumnApiService) {}
}
