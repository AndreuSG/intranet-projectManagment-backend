import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RubricLevelApiService } from './rubric-level-api.service';
import { CreateRubricLevelDto } from '../../domain/rubric-level/dto/create-rubric-level.dto';
import { UpdateRubricLevelDto } from '../../domain/rubric-level/dto/update-rubric-level.dto';
import { API_BASE } from 'src/shared/constants/API';

@Controller(`${API_BASE}/rubrics/levels`)
export class RubricLevelApiController {
    constructor(private readonly apiService: RubricLevelApiService) { }

    @Post()
    create(@Body() dto: CreateRubricLevelDto) {
        return this.apiService.create(dto);
    }

    @Get('criteri/:criteriId')
    findByCriterion(@Param('criteriId') criteriId: number) {
        return this.apiService.findByCriterion(Number(criteriId));
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() dto: UpdateRubricLevelDto) {
        return this.apiService.update(Number(id), dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.apiService.delete(Number(id));
    }
}
