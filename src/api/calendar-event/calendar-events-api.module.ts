import { CalendarEventsModule } from 'src/domain/calendar-event/calendar-event.module';
import { Module } from '@nestjs/common';
import { CalendarEventsController } from './calendar-events-api.controller';
import { CalendarEventsApiService } from './calendar-events-api.service';

@Module({
    imports: [CalendarEventsModule],
    controllers: [CalendarEventsController],
    providers: [CalendarEventsApiService],
    exports: [CalendarEventsApiService],
})
export class CalendarEventsApiModule {}