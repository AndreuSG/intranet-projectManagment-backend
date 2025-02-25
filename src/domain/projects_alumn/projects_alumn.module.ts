import { AlumnesInSelectedModuls } from './../alumnes_in_selected_moduls/alumnes-in-selected-moduls.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsAlumn } from './projects_alumn.entity';
import { ProjectsAlumnService } from './projects_alumn.service';
import { AlumnesInSelectedModulsModule } from '../alumnes_in_selected_moduls/alumnes_in_selected_moduls.module';

@Module({
    imports: [TypeOrmModule.forFeature([ProjectsAlumn, AlumnesInSelectedModuls]), AlumnesInSelectedModulsModule],
    providers: [ProjectsAlumnService],
    exports: [ProjectsAlumnService],
})
export class ProjectsAlumnModule {}
