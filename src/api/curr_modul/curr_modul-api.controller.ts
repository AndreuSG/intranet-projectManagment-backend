// src/api/curr-moduls-api/curr-moduls-api.controller.ts

import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CurrModulsApiService } from './curr_modul-api.service';
import { API_BASE } from 'src/shared/constants/API';

@Controller(`${API_BASE}/curr-moduls`)
export class CurrModulsApiController {
    constructor(private readonly currModulsApiService: CurrModulsApiService) {}
    @Get()
    async getAvailableModules() {
        return this.currModulsApiService.getAvailableModules();
    }
}
