import { Module } from '@nestjs/common';
import { RubricCriterionModule } from '../../domain/rubric-criterion/rubric-criterion.module';
import { RubricCriterionApiController } from './rubric-criterion-api.controller';
import { RubricCriterionApiService } from './rubric-criterion-api.service';

@Module({
    imports: [RubricCriterionModule],
    controllers: [RubricCriterionApiController],
    providers: [RubricCriterionApiService],
    exports: [RubricCriterionApiService],
})
export class RubricCriterionApiModule { }
