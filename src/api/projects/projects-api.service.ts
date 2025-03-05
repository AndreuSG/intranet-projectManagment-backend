import { Injectable } from '@nestjs/common';
import { ProjectsCentreService } from 'src/domain/projects/centre_projects/centre_projects.service';
import { CreateProjectCentreDto } from 'src/domain/projects/centre_projects/dto/create-projects_centre.dto';
import { UpdateProjectCentreDto } from 'src/domain/projects/centre_projects/dto/update-projects_centre.dto';
import { CreateProjectAlumnDto } from 'src/domain/projects/projects_alumn/dto/create-projects_alumn.dto';
import { UpdateProjectAlumnDto } from 'src/domain/projects/projects_alumn/dto/update-projects_alumn.dto';
import { ProjectsAlumn } from 'src/domain/projects/projects_alumn/projects_alumn.entity';
import { ProjectsAlumnService } from 'src/domain/projects/projects_alumn/projects_alumn.service';
import { UserService } from 'src/domain/user/user.service';

@Injectable()
export class ProjectsApiService {
    constructor(
        private readonly projectsAlumneService: ProjectsAlumnService,
        private readonly projectsCentreService: ProjectsCentreService,
        private readonly userService: UserService,
    ) {}

    async createProjectCentre(dto: CreateProjectCentreDto) {
        return this.projectsCentreService.create(dto);
    }

    async createProjectAlumn(dto: CreateProjectAlumnDto) {
        const user = await this.userService.findOneById(dto.creatPer);
        const projectData: Partial<ProjectsAlumn> = {
            ...dto,
            creatPer: user,
        };
        return this.projectsAlumneService.createProject(projectData, dto.alumnesIds);
    }

    async getAllProjectsCentre() {
        const projects = await this.projectsCentreService.findAll();
    
        return await Promise.all(
            projects.map(async (project) => {
                const user = await this.userService.findOneById(project.creatPer.id);
                return {
                    ...project,
                    creatPer: `${user.nom} ${user.cognoms}`,
                };
            }),
        );
    }

    async getAllProjectsAlumn() {
        return this.projectsAlumneService.findAll();
    }

    async getProjectByIdCentre(id: number) {
        return this.projectsCentreService.findById(id);
    }

    async getProjectByIdAlumn(id: number) {
        return this.projectsAlumneService.findById(id);
    }

    async updateProjectCentre(id: number, dto: UpdateProjectCentreDto) {
        return this.projectsCentreService.updateProject(id, dto);
    }

    async updateProjectAlumn(id: number, dto: UpdateProjectAlumnDto) {
        return this.projectsAlumneService.updateProject(id, dto, dto.alumnesIds);
    }

    async deleteProjectCentre(id: number) {
        return this.projectsCentreService.deleteProject(id);
    }

    async deleteProjectAlumn(id: number) {
        return this.projectsAlumneService.deleteProject(id);
    }
}
