// src/domain/curr-estudis/curr-estudis.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CurrEstudis } from './curr_estudis.entity';

@Injectable()
export class CurrEstudisService {
    constructor(
        @InjectRepository(CurrEstudis)
        private readonly currEstudisRepository: Repository<CurrEstudis>,
    ) {}

    async findById(id: number): Promise<CurrEstudis | null> {
        return this.currEstudisRepository.findOne({ where: { id }, relations: ['estudis'] });
    }
}
