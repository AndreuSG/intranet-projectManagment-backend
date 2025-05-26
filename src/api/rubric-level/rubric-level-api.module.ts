import { Module } from '@nestjs/common';
import { RubricLevelApiController } from './rubric-level-api.controller';
import { RubricLevelApiService } from './rubric-level-api.service';
import { RubricLevelModule } from 'src/domain/rubric-level/rubric-level.module';


@Module({
    imports: [RubricLevelModule],
    controllers: [RubricLevelApiController],
    providers: [RubricLevelApiService],
})
export class RubricLevelApiModule { }
