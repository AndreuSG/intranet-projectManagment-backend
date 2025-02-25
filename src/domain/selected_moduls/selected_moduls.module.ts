import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectedModul } from './selected-moduls.entity';
import { SelectedModulsService } from './selected-moduls.service';
import { AlumnesInSelectedModulsModule } from '../alumnes_in_selected_moduls/alumnes_in_selected_moduls.module';

@Module({
    imports: [TypeOrmModule.forFeature([SelectedModul]), AlumnesInSelectedModulsModule],
    providers: [SelectedModulsService],
    exports: [SelectedModulsService],
})
export class SelectedModulsModule {}
