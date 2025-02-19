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
            .select([   'cm.id AS idmodul',
                        'ce.id AS idcurriculum',
                        'ce.curriculum AS curriculum',
                        'ce.estudis AS estudis',
                        'cm.sigles AS sigles',
                        'cm.nom AS nom'])
            .innerJoin('curr_estudis', 'ce', 'cm.curriculum = ce.id')
            .innerJoin('mat_moduls', 'mm', 'cm.id = mm.idmodul')
            .innerJoin('mat_matricules', 'm', 'm.idnum = mm.idmat')
            .distinct(true)
            .orderBy('ce.estudis', 'ASC')
            .addOrderBy('cm.ordre', 'ASC')
            .getRawMany();
    }    
}
