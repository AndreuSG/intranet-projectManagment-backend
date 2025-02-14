// src/api/curr-estudis-api/curr-estudis-api.controller.ts

import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CurrEstudisApiService } from './curr_estudis-api.service';
import { CurrEstudis } from 'src/domain/curr_estudis/curr_estudis.entity';
import { API_BASE } from 'src/shared/constants/API';

@Controller(`${API_BASE}/curr-estudis`)
export class CurrEstudisApiController {
    constructor(private readonly currEstudisApiService: CurrEstudisApiService) {}

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<CurrEstudis | null> {
        return this.currEstudisApiService.findById(id);
    }

    @Get()
    async hello(): Promise<string> {
        return 'Hello World!';
    }
}
