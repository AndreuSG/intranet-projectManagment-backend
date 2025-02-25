//! TODO: Refactor
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsCentre } from './centre_projects.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ProjectsCentre])],
    providers: [],
    exports: [],
})
export class ProjectsCentreModule {}
