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

    async create(data: CreateAlumnDto): Promise<Alumn> {
        const newAlumn = this.alumnRepository.create(data);
        return this.alumnRepository.save(newAlumn);
    }

    async findAll(): Promise<Alumn[]> {
        return this.alumnRepository.find();
    }

    async findById(idalu: string): Promise<Alumn | null> {
        return this.alumnRepository.findOne({ where: { idalu } });
    }
}
