//! TODO: Refactor
import { Module } from '@nestjs/common';
import { ProjectsCentreModule } from 'src/domain/projects/centre_projects/centre_projects.module';
import { ProjectsAlumnModule } from 'src/domain/projects/projects_alumn/projects_alumn.module';
import { ProjectsApiController } from './projects-api.controller';
import { ProjectsApiService } from './projects-api.service';
import { UserModule } from 'src/domain/user/user.module';


@Module({
    imports: [ProjectsCentreModule, ProjectsAlumnModule, UserModule],
    controllers: [ProjectsApiController],
    providers: [ProjectsApiService],
})
export class ProjectsApiModule {}
