// api/rubric-courses/rubric-courses-api.module.ts

import { Module } from '@nestjs/common';
import { RubricCoursesApiService } from './rubric-courses-api.service';
import { RubricCoursesModule } from 'src/domain/rubric-courses/rubric-course.module';

@Module({
    imports: [RubricCoursesModule],
    providers: [RubricCoursesApiService],
    exports: [RubricCoursesApiService],
})
export class RubricCoursesApiModule {}
