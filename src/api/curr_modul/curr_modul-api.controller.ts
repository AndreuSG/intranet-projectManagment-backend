// src/api/curr-moduls-api/curr-moduls-api.controller.ts

import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CurrModulsApiService } from './curr_modul-api.service';
import { CurrModul } from 'src/domain/curr_modul/curr_modul.entity';

@Controller('curr-moduls')
export class CurrModulsApiController {
    constructor(private readonly currModulsApiService: CurrModulsApiService) {}
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<CurrModul | null> {
        return this.currModulsApiService.findById(id);
    }
}
