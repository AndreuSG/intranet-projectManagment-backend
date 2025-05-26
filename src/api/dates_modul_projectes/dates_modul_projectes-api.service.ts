import { Injectable } from '@nestjs/common';
import { DatesModulProjectesService } from 'src/domain/dates_modul_projectes/dates_modul_projectes.service';
import { CreateDatesModulProjectesDto, UpdateDatesModulProjectesDto } from 'src/domain/dates_modul_projectes/dto/dates_modul_projectes.dto';

@Injectable()
export class DatesModulProjectesApiService {
   constructor(private readonly datesModulProjectesService: DatesModulProjectesService) { }

   async findAll() {
      return this.datesModulProjectesService.findAll();
   }

   async findOne(id: number) {
      return this.datesModulProjectesService.findOne(id);
   }

   async findByModul(idModul: number) {
      return this.datesModulProjectesService.findByModul(idModul);
   }

   async findByProfe(idProfe: number) {
      return this.datesModulProjectesService.findByProfe(idProfe);
   }

   async findByGrup(idGrup: string) {
      return this.datesModulProjectesService.findByGrup(idGrup);
   }

   async create(createDto: CreateDatesModulProjectesDto) {
      return this.datesModulProjectesService.create(createDto);
   }

   async update(id: number, updateDto: UpdateDatesModulProjectesDto) {
      return this.datesModulProjectesService.update(id, updateDto);
   }

   async remove(id: number) {
      return this.datesModulProjectesService.remove(id);
   }
} 