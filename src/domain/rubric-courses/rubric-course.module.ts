import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RubricCourse } from './rubric-course.entity';
import { RubricCoursesService } from './rubric-courses.service';

@Module({
    imports: [TypeOrmModule.forFeature([RubricCourse])],
    providers: [RubricCoursesService],
    exports: [RubricCoursesService],
})
export class RubricCoursesModule {}
