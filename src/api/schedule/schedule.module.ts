import { Module } from '@nestjs/common';
import { ScheduleModule as DomainScheduleModule } from '../../domain/schedule/schedule.module';
import { ScheduleController } from './schedule.controller';

@Module({
  imports: [DomainScheduleModule],
  controllers: [ScheduleController],
})
export class ScheduleModule {} 