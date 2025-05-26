import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RubricLevel } from './rubric-level.entity';
import { RubricCriterion } from '../rubric-criterion/rubric-criterion.entity';
import { RubricLevelService } from './rubric-level.service';

@Module({
    imports: [TypeOrmModule.forFeature([RubricLevel, RubricCriterion])],
    providers: [RubricLevelService],
    exports: [RubricLevelService],
})
export class RubricLevelModule { }
