import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { API_BASE } from 'src/shared/constants/API';
import { ProjectsApiService } from './projects-api.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Roles } from 'src/shared/decorators/roles.decorator';
import { USER_ROLE } from 'src/shared/enums/user.role';
import { CreateProjectCentreDto } from 'src/domain/projects/centre_projects/dto/create-projects_centre.dto';
import { CreateProjectAlumnDto } from 'src/domain/projects/projects_alumn/dto/create-projects_alumn.dto';
import { UpdateProjectCentreDto } from 'src/domain/projects/centre_projects/dto/update-projects_centre.dto';
import { UpdateProjectAlumnDto } from 'src/domain/projects/projects_alumn/dto/update-projects_alumn.dto';

@Controller(`${API_BASE}/projects`)
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProjectsApiController {
    constructor(private readonly projectsApiService: ProjectsApiService) {}

    @Roles([USER_ROLE.PROFE])
    @Post('centre')
    async createCentre(@Body() dto: CreateProjectCentreDto) {
        return await this.projectsApiService.createProjectCentre(dto);
    }

    @Roles([USER_ROLE.PROFE])
    @Post('alumn')
    async createAlumn(@Body() dto: CreateProjectAlumnDto) {
        return await this.projectsApiService.createProjectAlumn(dto);
    }

    @Roles([USER_ROLE.PROFE])
    @Get()
    async getAllProjects() {
        let centre_projects = await this.projectsApiService.getAllProjectsCentre();
        let alumn_projects = await this.projectsApiService.getAllProjectsAlumn();
        return {
            centre: centre_projects,
            alumns: alumn_projects
        }
    }

    @Roles([USER_ROLE.PROFE])
    @Get('centre/:id')
    async getByIdCentre(@Param('id') id: number) {
        return await this.projectsApiService.getProjectByIdCentre(id);
    }

    @Roles([USER_ROLE.PROFE])
    @Get('alumn/:id')
    async getByIdAlumn(@Param('id') id: number) {
        return await this.projectsApiService.getProjectByIdAlumn(id);
    }

    @Roles([USER_ROLE.PROFE])
    @Put('centre/:id')
    async updateCentre(@Param('id') id: number, @Body() dto: UpdateProjectCentreDto) {
        return await this.projectsApiService.updateProjectCentre(id, dto);
    }

    @Roles([USER_ROLE.PROFE])
    @Put('alumn/:id')
    async updateAlumn(@Param('id') id: number, @Body() dto: UpdateProjectAlumnDto) {
        return await this.projectsApiService.updateProjectAlumn(id, dto);
    }

    @Roles([USER_ROLE.PROFE])
    @Delete('centre/:id')
    async deleteCentre(@Param('id') id: number) {
        return await this.projectsApiService.deleteProjectCentre(id);
    }

    @Roles([USER_ROLE.PROFE])
    @Delete('alumn/:id')
    async deleteAlumn(@Param('id') id: number) {
        return await this.projectsApiService.deleteProjectAlumn(id);
    }
}
