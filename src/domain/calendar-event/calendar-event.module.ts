import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarEventsService } from './calendar-event.service';
import { CalendarEvent } from './calendar-event.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CalendarEvent])],
    providers: [CalendarEventsService],
    exports: [CalendarEventsService],
})
export class CalendarEventsModule {}
