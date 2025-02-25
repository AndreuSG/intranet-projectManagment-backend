//! TODO: Refactor
import { Module } from '@nestjs/common';
import { ProjectsCentreModule } from 'src/domain/centre_projects/centre_projects.module';
import { ProjectsAlumnModule } from 'src/domain/projects_alumn/projects_alumn.module';


@Module({
    imports: [ProjectsCentreModule, ProjectsAlumnModule],
    controllers: [],
    providers: [],
})
export class ProjectsApiModule {}
