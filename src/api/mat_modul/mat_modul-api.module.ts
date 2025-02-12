// src/api/mat-moduls-api/mat-moduls-api.module.ts

import { Module } from '@nestjs/common';
import { MatModulApiController } from './mat_modul-api.controller';
import { MatModulsApiService } from './mat_modul-api.service';
import { MatModulModule } from 'src/domain/mat_modul/mat_modul.module';

@Module({
    imports: [MatModulModule],
    controllers: [MatModulApiController],
    providers: [MatModulsApiService],
})
export class MatModulApiModule {}
