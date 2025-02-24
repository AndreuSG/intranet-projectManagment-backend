// src/api/curr-moduls-api/curr-moduls-api.controller.ts

import { Controller, Get, UseGuards } from '@nestjs/common';
import { CurrModulsApiService } from './curr_modul-api.service';
import { API_BASE } from 'src/shared/constants/API';
import { AdminGuard } from 'src/auth/guard/admin.guard';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller(`${API_BASE}/curr-moduls`)
@UseGuards(JwtAuthGuard, AdminGuard)
export class CurrModulsApiController {
    constructor(private readonly currModulsApiService: CurrModulsApiService) {}
    @Get()
    async getAvailableModules() {
        return this.currModulsApiService.getAvailableModules();
    }
}
