import {
    Controller, Get, Post, Body, Patch, Param, Delete
} from '@nestjs/common';
import { CalendarEventsService } from 'src/domain/calendar-event/calendar-event.service';
import { CreateCalendarEventDto } from 'src/domain/calendar-event/dto/create-calendar-event.dto';
import { UpdateCalendarEventDto } from 'src/domain/calendar-event/dto/update-calendar-event.dto';

@Controller('calendar-events')
export class CalendarEventsController {
    constructor(private readonly service: CalendarEventsService) { }

    // @Post()
    // create(@Body() dto: CreateCalendarEventDto) {
    //     return this.service.create(dto);
    // }

    // @Get()
    // findAll() {
    //     return this.service.findAll();
    // }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return this.service.findOne(+id);
    // }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() dto: UpdateCalendarEventDto) {
    //     return this.service.update(+id, dto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.service.remove(+id);
    // }
}
