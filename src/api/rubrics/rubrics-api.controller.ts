import { Controller, Post, Get, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { RubricCoursesApiService } from './rubric-courses/rubric-courses-api.service';
import { RubricCourse } from 'src/domain/rubric-courses/rubric-course.entity';
import { CreateRubricCourseDto } from 'src/domain/rubric-courses/dto/create-rubric-course.dto';
import { UpdateRubricCourseDto } from 'src/domain/rubric-courses/dto/update-rubric-course.dto';
import { API_BASE } from 'src/shared/constants/API';
import { CreateRubricDto } from 'src/domain/rubric/dto/create-rubric.dto';
import { RubricApiService } from './rubric-api.service';

@Controller(`${API_BASE}/rubrics`)
export class RubricApiController {
    constructor(
        private readonly rubricCourseApiService: RubricCoursesApiService,
        private readonly rubricApiService: RubricApiService,
        ) {}

    @Post('courses')
    create(@Body() createCourseDto: CreateRubricCourseDto): Promise<RubricCourse> {
        return this.rubricCourseApiService.createCourse(createCourseDto);
    }

    @Get('courses')
    findAll(): Promise<RubricCourse[]> {
        return this.rubricCourseApiService.findAll();
    }

    @Get('courses/:id')
    findOne(@Param('id') id: number): Promise<RubricCourse> {
        return this.rubricCourseApiService.findById(id);
    }

    @Patch('courses/:id')
    update(@Param('id') id: number, @Body() dto: UpdateRubricCourseDto): Promise<RubricCourse | null> {
        return this.rubricCourseApiService.updateCourse(id, dto);
    }

    @Delete('courses/:id')
    delete(@Param('id') id: number): Promise<void> {
        return this.rubricCourseApiService.deleteCourse(id);
    }

    @Post()
    createRubric(@Body() dto: CreateRubricDto) {
        return this.rubricApiService.createRubric(dto);
    }

    @Get()
    findRubricsByGroup(@Query('grupId') grupId: number) {
        if (!grupId) {
            throw new Error('grupId query param is required');
        }
        return this.rubricApiService.findRubricsByGroup(Number(grupId));
    }
}
