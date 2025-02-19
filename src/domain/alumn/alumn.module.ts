// src/domain/alumn/alumn.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnService } from './alumn.service';
import { Alumn } from './alumn.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Alumn])],
    providers: [AlumnService],
    exports: [AlumnService],
})
export class AlumnModule {}
