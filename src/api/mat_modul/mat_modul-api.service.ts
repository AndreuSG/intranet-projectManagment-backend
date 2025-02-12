// src/api/mat-moduls-api/mat-moduls-api.service.ts

import { Injectable } from '@nestjs/common';
import { MatModul } from 'src/domain/mat_modul/mat_modul.entity';
import { MatModulService } from 'src/domain/mat_modul/mat_modul.service';

@Injectable()
export class MatModulsApiService {
    constructor(private readonly matModulService: MatModulService) {}

    async findById(idmodul: number): Promise<MatModul | null> {
        return this.matModulService.findById(idmodul);
    }
}
