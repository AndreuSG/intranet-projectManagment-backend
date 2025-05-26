import { Injectable } from '@nestjs/common';
import { RubricCriterionService } from '../../domain/rubric-criterion/rubric-criterion.service';
import { CreateRubricCriterionDto } from 'src/domain/rubric-criterion/dto/create-rubric-criterion.dto';

@Injectable()
export class RubricCriterionApiService {
    constructor(private readonly rubricCriterionService: RubricCriterionService) {}

    create(dto: CreateRubricCriterionDto) {
        return this.rubricCriterionService.create(dto);
    }

    findAll() {
        return this.rubricCriterionService.findAll();
    }

    findOne(id: number) {
        return this.rubricCriterionService.findOne(id);
    }

    update(id: number, dto: CreateRubricCriterionDto) {
        return this.rubricCriterionService.update(id, dto);
    }

    remove(id: number) {
        return this.rubricCriterionService.delete(id);
    }
}
