import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarEvent } from './calendar-event.entity';
import { GroupStudy } from '../group_study/group_study.entity';
import { Module } from '@nestjs/common';

@Module({
    imports: [TypeOrmModule.forFeature([CalendarEvent, GroupStudy])],
})
export class CalendarModule {}
