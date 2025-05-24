import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateRubricCriterionDto } from 'src/domain/rubric-criterion/dto/create-rubric-criterion.dto';
import { RubricCriterionApiService } from './rubric-criterion-api.service';
import { API_BASE } from 'src/shared/constants/API';


@Controller(`${API_BASE}/rubric-criterion`)
export class RubricCriterionApiController {
    constructor(private readonly rubricCriterionApiService: RubricCriterionApiService) { }

    @Post()
    create(@Body() dto: CreateRubricCriterionDto) {
        return this.rubricCriterionApiService.create(dto);
    }

    @Get()
    findAll() {
        return this.rubricCriterionApiService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.rubricCriterionApiService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: CreateRubricCriterionDto) {
        return this.rubricCriterionApiService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.rubricCriterionApiService.remove(id);
    }
}
