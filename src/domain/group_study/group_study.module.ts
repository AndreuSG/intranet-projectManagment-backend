import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupStudyService } from './group_study.service';
import { GroupStudy } from './group_study.entity';


@Module({
    imports: [TypeOrmModule.forFeature([GroupStudy])],
    providers: [GroupStudyService],
    exports: [GroupStudyService],
})
export class GroupStudyModule {}
