import { Module } from '@nestjs/common';
import { AlumnesInSelectedModulsModule } from 'src/domain/alumnes_in_selected_moduls/alumnes_in_selected_moduls.module';
import { AlumnesInSelectedModulsApiController } from './alumnes_in_selected_moduls-api.controller';
import { AlumnesInSelectedModulsApiService } from './alumnes_in_selected_moduls-api.service';


@Module({
    imports: [AlumnesInSelectedModulsModule],
    controllers: [AlumnesInSelectedModulsApiController],
    providers: [AlumnesInSelectedModulsApiService],
})
export class AlumnesInSelectedModulsApiModule {}
