import { Injectable } from '@nestjs/common';
import { CursGrup } from './curs_grup.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CursGrupService {
   constructor(
      @InjectRepository(CursGrup)
      private readonly cursGrupRepository: Repository<CursGrup>,
   ) { }

   async getAllCursos() {
      return this.cursGrupRepository
         .createQueryBuilder('cg')
         .innerJoin(
            'mat_matricules',
            'mm',                  
            `CONCAT(mm.estudis, ' ', mm.curs) = cg.id`
         )
         .where('cg.mostrar = :mostrar', { mostrar: '1' })
         .andWhere('cg.curs = :curs', { curs: 2 })
         .distinct(true)
         .getMany();

   }
}
