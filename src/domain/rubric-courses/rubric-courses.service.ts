import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RubricCourse } from './rubric-course.entity';

@Injectable()
export class RubricCoursesService {
    constructor(
        @InjectRepository(RubricCourse)
        private readonly rubricCourseRepo: Repository<RubricCourse>,
    ) {}

    async create(course: Partial<RubricCourse>): Promise<RubricCourse> {
        const newCourse = this.rubricCourseRepo.create(course);
        return this.rubricCourseRepo.save(newCourse);
    }

    async findAll(): Promise<RubricCourse[]> {
        return this.rubricCourseRepo.find();
    }

    async findById(id: number): Promise<RubricCourse | null> {
        return this.rubricCourseRepo.findOne({ where: { id } });
    }

    async update(id: number, changes: Partial<RubricCourse>): Promise<RubricCourse | null> {
        await this.rubricCourseRepo.update(id, changes);
        return this.rubricCourseRepo.findOne({ where: { id } });
    }

    async delete(id: number): Promise<void> {
        await this.rubricCourseRepo.delete(id);
    }
}
