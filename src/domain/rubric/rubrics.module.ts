// src/domain/rubrics/rubrics.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rubric } from './rubric.entity';
import { RubricCourse } from '../rubric-courses/rubric-course.entity';
import { RubricsService } from './rubric.service';
import { RubricCriterion } from '../rubric-criterion/rubric-criterion.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Rubric, RubricCourse, RubricCriterion])],
    providers: [RubricsService],
    exports:   [RubricsService],
})
export class RubricsModule {}
