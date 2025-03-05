import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupStudy } from './group_study.entity';

@Injectable()
export class GroupStudyService {
    constructor(
        @InjectRepository(GroupStudy)
        private readonly groupStudyRepository: Repository<GroupStudy>,
    ) {}

    async findByEmail(email: string): Promise<string[]> {
        return this.groupStudyRepository.createQueryBuilder('mp')
            .select('mp.idgrup')
            .innerJoin('mp.user', 'u')
            .where('u.usuari = :email', { email })
            .getMany()
            .then(ids => ids.map(id => id.idgrup));
    }
}
