import { Module } from '@nestjs/common';
import { RubricsModule } from 'src/domain/rubric/rubrics.module';
import { RubricApiController } from './rubrics-api.controller';
import { RubricApiService } from './rubric-api.service';
import { RubricCoursesApiModule } from './rubric-courses/rubric-courses-api.module';

@Module({
    imports: [RubricsModule, RubricCoursesApiModule],
    controllers: [RubricApiController],
    providers: [RubricApiService],
})
export class RubricApiModule {}