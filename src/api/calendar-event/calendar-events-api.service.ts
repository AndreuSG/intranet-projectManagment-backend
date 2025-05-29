import { Injectable } from '@nestjs/common';
import { CalendarEventsService } from 'src/domain/calendar-event/calendar-event.service';
import { CreateCalendarEventDto } from 'src/domain/calendar-event/dto/create-calendar-event.dto';
import { UpdateCalendarEventDto } from 'src/domain/calendar-event/dto/update-calendar-event.dto';

@Injectable()
export class CalendarEventsApiService {
    constructor(private readonly calendarEventsService: CalendarEventsService) {}

    create(dto: CreateCalendarEventDto) {
        return this.calendarEventsService.create(dto);
    }

    findAll() {
        return this.calendarEventsService.findAll();
    }

    findOne(id: number) {
        return this.calendarEventsService.findOne(id);
    }

    update(id: number, dto: UpdateCalendarEventDto) {
        return this.calendarEventsService.update(id, dto);
    }

    remove(id: number) {
        return this.calendarEventsService.remove(id);
    }
}