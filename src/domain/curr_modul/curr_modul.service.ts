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

    async getAvailableModules() {
        return this.currModulRepository
            .createQueryBuilder('cm')
            .select([
                'ce.curriculum AS curriculum',
                'ce.estudis AS estudis',
                'cm.sigles AS sigles',
                'cm.nom AS nom'
            ])
            .innerJoin('curr_estudis', 'ce', 'cm.curriculum = ce.id')
            .orderBy('ce.estudis', 'ASC')
            .addOrderBy('cm.ordre', 'ASC')
            .getRawMany();
    }
}
