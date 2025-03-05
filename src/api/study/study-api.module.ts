import { Module } from '@nestjs/common';
import { StudyModule } from 'src/domain/study/study.module';


@Module({
    imports: [StudyModule],
    controllers: [],
    providers: [],
})
export class StudyApiModule {}
