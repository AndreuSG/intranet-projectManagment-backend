// src/domain/mat-moduls/mat-modul.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatModulService } from './mat_modul.service';
import { MatModul } from './mat_modul.entity';

@Module({
    imports: [TypeOrmModule.forFeature([MatModul])],
    providers: [MatModulService],
    exports: [MatModulService],
})
export class MatModulModule {}
