// src/api/api.module.ts
import { Module } from '@nestjs/common';
import { AlumnApiModule } from './alumn/alumn-api.module';
import { MatModulApiModule } from './mat_modul/mat_modul-api.module';
import { CurrModulApiModule } from './curr_modul/curr_modul-api.module';
import { CurrEstudisApiModule } from './curr_estudis/curr_estudis-api.module';
import { SelectedModulsApiModule } from './selected_moduls/alumnes-selected-moduls-api.module';
import { AlumnesInSelectedModulsApiModule } from './alumnes_in_selected_moduls/alumnes_in_selected_moduls.module';

@Module({
    imports: [AlumnApiModule, MatModulApiModule, CurrModulApiModule, CurrEstudisApiModule, SelectedModulsApiModule, AlumnesInSelectedModulsApiModule],
})
export class ApiModule {}
