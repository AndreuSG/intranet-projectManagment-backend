// src/api/curr-estudis-api/curr-estudis-api.service.ts

import { Injectable } from '@nestjs/common';
import { CurrEstudis } from 'src/domain/curr_estudis/curr_estudis.entity';
import { CurrEstudisService } from 'src/domain/curr_estudis/curr_estudis.service';

@Injectable()
export class CurrEstudisApiService {
    constructor(private readonly currEstudisService: CurrEstudisService) {}

    async findById(id: number): Promise<CurrEstudis | null> {
        return this.currEstudisService.findById(id);
    }
}
