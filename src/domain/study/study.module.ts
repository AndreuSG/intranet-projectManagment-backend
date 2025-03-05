import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Study } from './study.entity';
import { StudyService } from './study.service';


@Module({
    imports: [TypeOrmModule.forFeature([Study])],
    providers: [StudyService],
    exports: [StudyService],
})
export class StudyModule {}

