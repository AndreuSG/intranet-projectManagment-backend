import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedule } from './schedule.entity';
import { CurrModul } from '../curr_modul/curr_modul.entity';
import { User } from '../user/user.entity';
import { CursGrup } from '../curs_grup/curs_grup.entity';
import { ScheduleService } from './schedule.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Schedule, CurrModul, User, CursGrup])
  ],
  providers: [ScheduleService],
  exports: [TypeOrmModule, ScheduleService],
})
export class ScheduleModule {} 