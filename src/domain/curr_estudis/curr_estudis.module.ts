// src/domain/curr-estudis/curr-estudis.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrEstudis } from './curr_estudis.entity';
import { CurrEstudisService } from './curr_estudis.service';

@Module({
    imports: [TypeOrmModule.forFeature([CurrEstudis])],
    providers: [CurrEstudisService],
    exports: [CurrEstudisService],
})
export class CurrEstudisModule {}
