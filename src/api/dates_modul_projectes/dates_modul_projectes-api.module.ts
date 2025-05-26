import { Module } from '@nestjs/common';
import { DatesModulProjectesApiController } from './dates_modul_projectes-api.controller';
import { DatesModulProjectesApiService } from './dates_modul_projectes-api.service';
import { DatesModulProjectesModule } from 'src/domain/dates_modul_projectes/dates_modul_projectes.module';

@Module({
   imports: [DatesModulProjectesModule],
   controllers: [DatesModulProjectesApiController],
   providers: [DatesModulProjectesApiService],
})
export class DatesModulProjectesApiModule { } 