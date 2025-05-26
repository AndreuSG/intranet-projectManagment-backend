import { Injectable, NotFoundException } from '@nestjs/common';
import { RubricCoursesService } from 'src/domain/rubric-courses/rubric-courses.service';
import { RubricCourse } from 'src/domain/rubric-courses/rubric-course.entity';
import { CreateRubricCourseDto } from 'src/domain/rubric-courses/dto/create-rubric-course.dto';
import { UpdateRubricCourseDto } from 'src/domain/rubric-courses/dto/update-rubric-course.dto';

@Injectable()
export class RubricCoursesApiService {
    constructor(private readonly rubricCoursesService: RubricCoursesService) {}

    async createCourse(dto: CreateRubricCourseDto): Promise<RubricCourse> {
        return this.rubricCoursesService.create(dto);
    }

    async findAll(): Promise<RubricCourse[]> {
        return this.rubricCoursesService.findAll();
    }

    async findById(id: number): Promise<RubricCourse> {
        const course = await this.rubricCoursesService.findById(id);
        if (!course) {
            throw new NotFoundException(`RubricCourse with id "${id}" not found`);
        }
        return course;
    }

    async updateCourse(id: number, dto: UpdateRubricCourseDto): Promise<RubricCourse | null> {
        const existing = await this.findById(id);
        return this.rubricCoursesService.update(existing.id, {
            ...dto,
        });
    }

    async deleteCourse(id: number): Promise<void> {
        await this.findById(id);
        return this.rubricCoursesService.delete(id);
    }
}
