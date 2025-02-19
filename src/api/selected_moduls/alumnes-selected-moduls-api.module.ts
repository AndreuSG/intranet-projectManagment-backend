import { Module } from '@nestjs/common';
import { SelectedModulsApiController } from './selected-moduls-api.controller';
import { SelectedModulsModule } from 'src/domain/selected_moduls/selected_moduls.module';
import { SelectedModulsApiService } from './slected_moduls-api.service';


@Module({
    imports: [SelectedModulsModule],
    controllers: [SelectedModulsApiController],
    providers: [SelectedModulsApiService],
})
export class SelectedModulsApiModule {}

