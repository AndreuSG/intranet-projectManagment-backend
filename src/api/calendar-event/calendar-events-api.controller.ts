import {
    Controller, Get, Post, Body, Patch, Param, Delete,
    Put
} from '@nestjs/common';
import { CreateCalendarEventDto } from 'src/domain/calendar-event/dto/create-calendar-event.dto';
import { UpdateCalendarEventDto } from 'src/domain/calendar-event/dto/update-calendar-event.dto';
import { CalendarEventsApiService } from './calendar-events-api.service';

@Controller('api/calendar-events')
export class CalendarEventsController {
    constructor(private readonly service: CalendarEventsApiService) { }

    @Post()
    create(@Body() dto: CreateCalendarEventDto) {
        return this.service.create(dto);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.service.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateCalendarEventDto) {
        return this.service.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(+id);
    }
}
