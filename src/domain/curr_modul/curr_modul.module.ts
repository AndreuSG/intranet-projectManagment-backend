// src/domain/mat-moduls/mat-modul.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrModul } from './curr_modul.entity';
import { CurrModulService } from './curr_modul.service';


@Module({
    imports: [TypeOrmModule.forFeature([CurrModul])],
    providers: [CurrModulService],
    exports: [CurrModulService],
})
export class CurrModulModule {}
