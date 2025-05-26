import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataModulProjecte } from './dates_modul_projectes.entity';
import { DatesModulProjectesService } from './dates_modul_projectes.service';

@Module({
   imports: [TypeOrmModule.forFeature([DataModulProjecte])],
   providers: [DatesModulProjectesService],
   exports: [DatesModulProjectesService],
})
export class DatesModulProjectesModule { } 