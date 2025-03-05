//! TODO: Refactor
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsCentre } from './centre_projects.entity';
import { ProjectsCentreService } from './centre_projects.service';

@Module({
    imports: [TypeOrmModule.forFeature([ProjectsCentre])],
    providers: [ProjectsCentreService],
    exports: [ProjectsCentreService],
})
export class ProjectsCentreModule {}
