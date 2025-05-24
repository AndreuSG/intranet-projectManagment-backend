import { Injectable } from '@nestjs/common';

import { CreateRubricLevelDto } from '../../domain/rubric-level/dto/create-rubric-level.dto';
import { UpdateRubricLevelDto } from '../../domain/rubric-level/dto/update-rubric-level.dto';
import { RubricLevelService } from 'src/domain/rubric-level/rubric-level.service';

@Injectable()
export class RubricLevelApiService {
    constructor(private readonly levelService: RubricLevelService) { }

    create(dto: CreateRubricLevelDto) {
        return this.levelService.create(dto);
    }

    findByCriterion(criteriId: number) {
        return this.levelService.findByCriterion(criteriId);
    }

    update(id: number, dto: UpdateRubricLevelDto) {
        return this.levelService.update(id, dto);
    }

    delete(id: number) {
        return this.levelService.delete(id);
    }
}
