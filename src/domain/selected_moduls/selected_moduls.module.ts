import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedModul } from './entity/selected-moduls.entity';
import { SelectedModulsService } from './selected-moduls.service';
import { CurrEstudis } from '../curr_estudis/curr_estudis.entity';
import { CurrModul } from '../curr_modul/curr_modul.entity';
import { AlumnesInSelectedModulsModule } from '../alumnes_in_selected_moduls/alumnes_in_selected_moduls.module';

@Module({
    imports: [TypeOrmModule.forFeature([SelectedModul]), AlumnesInSelectedModulsModule],
    providers: [SelectedModulsService],
    exports: [SelectedModulsService],
})
export class SelectedModulsModule {}
