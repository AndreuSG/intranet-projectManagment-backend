import { Module } from '@nestjs/common';
import { GroupStudyModule } from 'src/domain/group_study/group_study.module';
import { GroupStudyApiController } from './group_study-api.controller';
import { GroupStudyApiService } from './group_study-api.service';


@Module({
    imports: [GroupStudyModule],
    controllers: [GroupStudyApiController],
    providers: [GroupStudyApiService],
})
export class GroupStudyApiModule {}
