import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RubricCriterion } from './rubric-criterion.entity';
import { RubricCriterionService } from './rubric-criterion.service';
import { Rubric } from '../rubric/rubric.entity';
import { RubricLevel } from '../rubric-level/rubric-level.entity';

@Module({
    imports: [TypeOrmModule.forFeature([RubricCriterion, Rubric, RubricLevel])],
    providers: [RubricCriterionService],
    exports: [RubricCriterionService],
})
export class RubricCriterionModule { }
