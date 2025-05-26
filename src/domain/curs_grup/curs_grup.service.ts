import { Injectable } from '@nestjs/common';
import { CursGrup } from './curs_grup.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CursGrupService {
   constructor(
      @InjectRepository(CursGrup)
      private readonly cursGrupRepository: Repository<CursGrup>,
   ) {}

   async getAllCursos() {
      return this.cursGrupRepository.find({ where: {
         mostrar: '1',
         curs: 2
      }})
   }
}
