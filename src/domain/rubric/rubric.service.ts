// src/domain/rubrics/rubrics.service.ts
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rubric } from './rubric.entity';
import { RubricCourse } from '../rubric-courses/rubric-course.entity';
import { CreateRubricDto } from './dto/create-rubric.dto';

@Injectable()
export class RubricsService {
    constructor(
        @InjectRepository(Rubric) private rubricRepo: Repository<Rubric>,
        @InjectRepository(RubricCourse) private courseRepo: Repository<RubricCourse>,
    ) { }

    /* ---------- crear rúbrica ---------- */
    async create(dto: CreateRubricDto): Promise<Rubric> {
        const course = await this.courseRepo.findOneBy({ id: dto.rubriquesGrupId });
        if (!course) throw new NotFoundException('Rubric group not found');

        const exists = await this.rubricRepo.exist({
            where: { rubriquesGrupId: dto.rubriquesGrupId, nom: dto.name },
        });
        if (exists) throw new ConflictException('Nom ja utilitzat en aquest grup');

        const rubric = this.rubricRepo.create({
            rubriquesGrupId: dto.rubriquesGrupId,
            nom: dto.name,
            descripcio: dto.description,
            puntuacioMax: dto.maxScore ?? 4,
        });

        return this.rubricRepo.save(rubric);
    }

    /* ---------- update ---------- */
    async update(id: number, dto: Partial<CreateRubricDto>): Promise<Rubric> {
        const rubric = await this.rubricRepo.findOneBy({ id });
        if (!rubric) throw new NotFoundException('Rubric not found');

        if (dto.name) rubric.nom = dto.name;
        if (dto.description) rubric.descripcio = dto.description;
        if (dto.maxScore) rubric.puntuacioMax = dto.maxScore;

        return this.rubricRepo.save(rubric);
    }


    /* ---------- listar rúbricas de un grupo ---------- */
    findByGroup(groupId: number): Promise<Rubric[]> {
        return this.rubricRepo.find({ where: { rubriquesGrupId: groupId } });
    }

    /* (opcional) obtener una sola rúbrica */
    findOne(id: number): Promise<Rubric | null> {
        return this.rubricRepo.findOneBy({ id });
    }

    /* (opcional) eliminar */
    async delete(id: number): Promise<void> {
        await this.rubricRepo.delete(id);
    }
}
