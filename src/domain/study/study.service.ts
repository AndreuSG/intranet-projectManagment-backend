import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Study } from './study.entity';

@Injectable()
export class StudyService {
    constructor(
        @InjectRepository(Study)
        private readonly studyRepository: Repository<Study>,
    ) {}

    async findAll(): Promise<Study[]> {
        return this.studyRepository.find();
    }

    async findById(id: string): Promise<Study | null> {
        return this.studyRepository.findOne({ where: { id } });
    }
}