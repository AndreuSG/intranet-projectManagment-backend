// src/api/mat-moduls-api/mat-moduls-api.controller.ts

import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MatModul } from 'src/domain/mat_modul/mat_modul.entity';
import { MatModulsApiService } from './mat_modul-api.service';

@Controller('mat-moduls')
export class MatModulApiController {
    constructor(private readonly matModulsApiService: MatModulsApiService) {}

    @Get('/:idmodul')
    async findOne(
        @Param('idmodul') idmodul: number,
    ): Promise<MatModul | null> {
        return this.matModulsApiService.findById(idmodul);
    }
}
