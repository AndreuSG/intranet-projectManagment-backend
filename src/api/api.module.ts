// src/api/api.module.ts
import { Module } from '@nestjs/common';
import { AlumnApiModule } from './alumn/alumn-api.module';
import { MatModulApiModule } from './mat_modul/mat_modul-api.module';
import { CurrModulApiModule } from './curr_modul/curr_modul-api.module';
import { CurrEstudisApiModule } from './curr_estudis/curr_estudis-api.module';
import { SelectedModulsApiModule } from './selected_moduls/selected-moduls-api.module';
import { AlumnesInSelectedModulsApiModule } from './alumnes_in_selected_moduls/alumnes_in_selected_moduls-api.module';
import { ProjectsApiModule } from './projects/projects-api.module';
import { AttachmentApiModule } from './attachment/attachment-api.module';
import { StudyApiModule } from './study/study-api.module';
import { GroupStudyApiModule } from './group_study/group_study-api.module';
import { RubricCoursesApiModule } from './rubrics/rubric-courses/rubric-courses-api.module';
import { RubricApiModule } from './rubrics/rubric-api.module';
import { RubricCriterionApiModule } from './rubric-criterion/rubric-criterion-api.module';
import { RubricLevelApiModule } from './rubric-level/rubric-level-api.module';

@Module({
    imports: [
        AlumnApiModule, 
        MatModulApiModule, 
        CurrModulApiModule, 
        CurrEstudisApiModule, 
        SelectedModulsApiModule, 
        AlumnesInSelectedModulsApiModule, 
        ProjectsApiModule, 
        AttachmentApiModule,
        StudyApiModule,
        GroupStudyApiModule,
        RubricApiModule,
        RubricCriterionApiModule,
        RubricLevelApiModule
    ],

})
export class ApiModule {}
