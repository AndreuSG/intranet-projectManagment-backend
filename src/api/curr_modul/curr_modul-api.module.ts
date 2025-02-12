import { Module } from '@nestjs/common';
import { CurrModulsApiController } from './curr_modul-api.controller';
import { CurrModulsApiService } from './curr_modul-api.service';
import { CurrModulModule } from 'src/domain/curr_modul/curr_modul.module';


@Module({
    imports: [CurrModulModule],
    controllers: [CurrModulsApiController],
    providers: [CurrModulsApiService],
})
export class CurrModulApiModule {}