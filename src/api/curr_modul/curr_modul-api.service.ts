// src/api/curr-moduls-api/curr-moduls-api.service.ts

import { Injectable } from '@nestjs/common';
import { CurrModul } from 'src/domain/curr_modul/curr_modul.entity';
import { CurrModulService } from 'src/domain/curr_modul/curr_modul.service';

@Injectable()
export class CurrModulsApiService {
    constructor(private readonly currModulService: CurrModulService) {}

    async findById(id: number): Promise<CurrModul | null> {
        return this.currModulService.findById(id);
    }
}
