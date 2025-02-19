import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumn } from './alumn.entity';
import { CreateAlumnDto } from './dto/create-alumn.dto';

@Injectable()
export class AlumnService {
    constructor(
        @InjectRepository(Alumn)
        private readonly alumnRepository: Repository<Alumn>,
    ) {}

    async findAlumnesByModulAndCurr(idmodul: number, idcurriculum: number) {
        return await this.alumnRepository
            .createQueryBuilder('a')
            .select([
                'a.idalu AS idalu', 
                'mm.idmodul AS idmodul', 
                'm.curriculum AS idcurriculum', 
                '1 AS active'
            ])
            .innerJoin('mat_matricules', 'm', 'm.idalu = a.idalu')
            .innerJoin('mat_moduls', 'mm', 'mm.idmat = m.idnum')
            .where('mm.idmodul = :idmodul', { idmodul })
            .andWhere('m.curriculum = :idcurriculum', { idcurriculum })
            .getRawMany();
    }
    
}
