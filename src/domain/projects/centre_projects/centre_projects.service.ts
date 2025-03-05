import { AlumnService } from './../../alumn/alumn.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectsCentre } from './centre_projects.entity';
import { CreateProjectCentreDto } from './dto/create-projects_centre.dto';
import { UpdateProjectCentreDto } from './dto/update-projects_centre.dto';
import { User } from 'src/domain/user/user.entity';


@Injectable()
export class ProjectsCentreService {
    constructor(
        @InjectRepository(ProjectsCentre)
        private readonly projectsCentreRepository: Repository<ProjectsCentre>,
    ) {}

    async create(dto: CreateProjectCentreDto): Promise<ProjectsCentre> {
        const project = this.projectsCentreRepository.create({
            ...dto,
            creatPer: { id: dto.creatPer } as User,
        });
        return this.projectsCentreRepository.save(project);
    }
    

    async findAll(): Promise<ProjectsCentre[]> {
        return this.projectsCentreRepository.find({
            relations: ['creatPer', 'attachments'],
        });
    }

    async findById(id: number): Promise<ProjectsCentre | null> {
        return this.projectsCentreRepository.findOne({
            where: { id },
            relations: ['creatPer', 'attachments'],
        });
    }

    async updateProject(id: number, dto: UpdateProjectCentreDto): Promise<ProjectsCentre | null> {
        await this.projectsCentreRepository.update(id, dto);
        return this.findById(id);
    }

    async deleteProject(id: number): Promise<void> {
        await this.projectsCentreRepository.delete(id);
    }
}
