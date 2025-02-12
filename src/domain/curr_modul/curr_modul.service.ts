import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CurrModul } from './curr_modul.entity';

@Injectable()
export class CurrModulService {
    constructor(
        @InjectRepository(CurrModul)
        private readonly currModulRepository: Repository<CurrModul>,
    ) {}

    async findById(id: number): Promise<CurrModul | null> {
        return this.currModulRepository.findOne({ where: { id } });
    }
}
