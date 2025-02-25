//! TODO: Refactor

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectsAlumn } from './projects_alumn.entity';
import { AlumnesInSelectedModulsService } from '../alumnes_in_selected_moduls/alumnes-in-selected-moduls.service';

@Injectable()
export class ProjectsAlumnService {
    constructor(
        @InjectRepository(ProjectsAlumn)
        private readonly projectesAlumneRepository: Repository<ProjectsAlumn>,

        private readonly alumnesInSelectedModulsService: AlumnesInSelectedModulsService,
    ) {}

    async createProject(projectData: Partial<ProjectsAlumn>, alumnesIds: number[]): Promise<ProjectsAlumn> {
        const newProject = this.projectesAlumneRepository.create(projectData);
        const savedProject = await this.projectesAlumneRepository.save(newProject);

        if (alumnesIds.length > 0) {
            const alumnes = await this.alumnesInSelectedModulsService.findByIds(alumnesIds);
            savedProject.alumnesAssignats = alumnes;
            await this.projectesAlumneRepository.save(savedProject);
        }

        return savedProject;
    }

    async findAll(): Promise<ProjectsAlumn[]> {
        return this.projectesAlumneRepository.find({ relations: ['alumnesAssignats'] });
    }

    async findById(id: number): Promise<ProjectsAlumn | null> {
        return this.projectesAlumneRepository.findOne({
            where: { id },
            relations: ['alumnesAssignats'],
        });
    }

    async updateProject(id: number, updateData: Partial<ProjectsAlumn>, alumnesIds?: number[]): Promise<ProjectsAlumn> {
        const project = await this.findById(id);

        if (!project) {
            throw new Error('Projecte no trobat');
        }

        Object.assign(project, updateData);

        if (alumnesIds) {
            const alumnes = await this.alumnesInSelectedModulsService.findByIds(alumnesIds);
            project.alumnesAssignats = alumnes;
        }

        return this.projectesAlumneRepository.save(project);
    }

    async deleteProject(id: number): Promise<void> {
        await this.projectesAlumneRepository.delete(id);
    }
}
