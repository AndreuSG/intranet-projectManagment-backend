import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataModulProjecte } from './dates_modul_projectes.entity';

@Injectable()
export class DatesModulProjectesService {
   constructor(
      @InjectRepository(DataModulProjecte)
      private readonly datesModulProjectesRepository: Repository<DataModulProjecte>,
   ) { }

   async findAll(): Promise<DataModulProjecte[]> {
      return this.datesModulProjectesRepository.find({
         relations: ['modul', 'profe', 'grup']
      });
   }

   async findOne(id: number): Promise<DataModulProjecte | null> {
      return this.datesModulProjectesRepository.findOne({
         where: { id },
         relations: ['modul', 'profe', 'grup']
      });
   }

   async findByModul(idModul: number): Promise<DataModulProjecte[]> {
      return this.datesModulProjectesRepository.find({
         where: { idModul },
         relations: ['modul', 'profe', 'grup']
      });
   }

   async findByProfe(idProfe: number): Promise<DataModulProjecte[]> {
      return this.datesModulProjectesRepository.find({
         where: { idProfe },
         relations: ['modul', 'profe', 'grup']
      });
   }

   async findByGrup(idGrup: string): Promise<DataModulProjecte[]> {
      return this.datesModulProjectesRepository.find({
         where: { idGrup },
         relations: ['modul', 'profe', 'grup']
      });
   }

   async create(datesModulProjectes: Partial<DataModulProjecte>): Promise<DataModulProjecte> {
      const newDatesModulProjectes = this.datesModulProjectesRepository.create(datesModulProjectes);
      return this.datesModulProjectesRepository.save(newDatesModulProjectes);
   }

   async update(id: number, datesModulProjectes: Partial<DataModulProjecte>): Promise<DataModulProjecte | null> {
      await this.datesModulProjectesRepository.update(id, datesModulProjectes);
      return this.findOne(id);
   }

   async remove(id: number): Promise<void> {
      await this.datesModulProjectesRepository.delete(id);
   }
} 