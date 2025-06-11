import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not, IsNull, Like } from 'typeorm';
import { Schedule } from './schedule.entity';
import { CursGrup } from '../curs_grup/curs_grup.entity';
import { CurrModul } from '../curr_modul/curr_modul.entity';

@Injectable()
export class ScheduleService {
   private mapScheduleModul: Record<string, number> = {
      "SEGX": 30,
      "WEBX": 43,
      "SERV:ASIX": 29,
      "PRJFOL:ASIX": 52,
      "ASOX": 28,
      "ISOX": 51,
      "HWX": 18,
      "SERW": 44,
      "INTERFW": 46,
      "CLIW": 43,
      "PRJFOL": 48,
      "DESPW": 45,
      "IPRO": 15,
      "SEG": 10,
      "SERV:SMX": 11,
      "SOX": 9,
      "CSFOL": 14,
   };

   constructor(
      @InjectRepository(Schedule)
      private scheduleRepository: Repository<Schedule>,
   ) { }

   async findAll(): Promise<Schedule[]> {

      const caseWhenClauses = Object.entries(this.mapScheduleModul).map(
         ([sigla, modId]) => {
            if (sigla.includes(':')) {
               const [asig, estudio] = sigla.split(':');
               return `WHEN schedule.assignatura = '${asig}' AND schedule.grup LIKE '${estudio}%' THEN ${modId}`;
            } else {
               return `WHEN schedule.assignatura = '${sigla}' THEN ${modId}`;
            }
         }
      );
      const caseSql = `
         CASE
            ${caseWhenClauses.join('\n      ')}
            ELSE NULL
         END
      `;

      return this.scheduleRepository
         .createQueryBuilder('schedule')
         .where('schedule.grup != :emptyString', { emptyString: '' })
         .andWhere('schedule.aula != :emptyString', { emptyString: '' })
         .andWhere('schedule.aula NOT LIKE :aulaPattern', { aulaPattern: 'AGU%' })
         .andWhere('schedule.grup IN (:...grupNames)', { grupNames: ['ASIX2', 'SMX2B', 'SMX2C', 'SMX2A', 'DAW2'] })
         .andWhere('schedule.assignatura NOT LIKE :assignaturaPattern', { assignaturaPattern: 'TUT%' })
         .leftJoinAndMapOne(
            'schedule.currModul',    
            CurrModul,               
            'currModul',             
            `currModul.id = ${caseSql}`
         )
         .leftJoinAndSelect('schedule.user', 'user')
         .leftJoinAndMapOne(
            'schedule.cursGrup',
            CursGrup,
            'cursGrup',
            `
               (
                  schedule.grup LIKE 'SMX%' 
                  AND CONCAT(
                     LEFT(schedule.grup, LENGTH(schedule.grup) - 2),
                     ' ',
                     RIGHT(schedule.grup, 2)
                  ) = cursGrup.id
               )
               OR
               (
                  schedule.grup NOT LIKE 'SMX%' 
                  AND CONCAT(
                     LEFT(schedule.grup, LENGTH(schedule.grup) - 1),
                     ' ',
                     RIGHT(schedule.grup, 1),
                     'A'
                  ) = cursGrup.id
               )
            `
         )
         .getMany();
   }
} 