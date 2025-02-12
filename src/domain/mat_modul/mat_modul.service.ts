import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MatModul } from './mat_modul.entity';

@Injectable()
export class MatModulService {
    constructor(
        @InjectRepository(MatModul)
        private readonly matModulRepository: Repository<MatModul>,
    ) {}

    async findById(idmodul: number): Promise<MatModul | null> {
        return this.matModulRepository.findOne({
        where: {idmodul},
        relations: ['modulRef'],
        });
    }
}