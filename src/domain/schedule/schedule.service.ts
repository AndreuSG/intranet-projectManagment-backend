import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not, IsNull, Like } from 'typeorm';
import { Schedule } from './schedule.entity';
import { CursGrup } from '../curs_grup/curs_grup.entity';

@Injectable()
export class ScheduleService {
   constructor(
      @InjectRepository(Schedule)
      private scheduleRepository: Repository<Schedule>,
   ) { }

   async findAll(): Promise<Schedule[]> {
      return this.scheduleRepository
         .createQueryBuilder('schedule')
         .where('schedule.grup != :emptyString', { emptyString: '' })
         .andWhere('schedule.aula != :emptyString', { emptyString: '' })
         .andWhere('schedule.aula NOT LIKE :aulaPattern', { aulaPattern: 'AGU%' })
         .andWhere('schedule.grup IN (:...grupNames)', { grupNames: ['ASIX2', 'SMX2B', 'SMX2C', 'SMX2A', 'DAW2'] })
         .leftJoinAndSelect('schedule.currModul', 'currModul')
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