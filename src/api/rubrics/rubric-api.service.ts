import { Injectable, NotFoundException } from '@nestjs/common';
import { RubricCourse } from 'src/domain/rubric-courses/rubric-course.entity';
import { CreateRubricDto } from 'src/domain/rubric/dto/create-rubric.dto';
import { Rubric } from 'src/domain/rubric/rubric.entity';
import { RubricCoursesApiService } from './rubric-courses/rubric-courses-api.service';
import { RubricsService } from 'src/domain/rubric/rubric.service';

@Injectable()
export class RubricApiService {
    constructor(
        private readonly rubricGroupService: RubricCoursesApiService,
        private readonly rubricService: RubricsService,
    ) {}

    async createRubric(dto: CreateRubricDto): Promise<Rubric> {
        // Comprobar que el grupo existe usando el service
        const group = await this.rubricGroupService.findById(dto.rubriquesGrupId);
        if (!group) throw new NotFoundException('Rubric group not found');

        // Crear la rúbrica usando el service
        return this.rubricService.create(dto);
    }

    async findRubricsByGroup(grupId: number) {
        return this.rubricService.findByGroup(grupId);
    }
}