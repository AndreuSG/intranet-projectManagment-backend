import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { CalendarEvent } from './calendar-event.entity';
import { CreateCalendarEventDto } from './dto/create-calendar-event.dto';
import { UpdateCalendarEventDto } from './dto/update-calendar-event.dto';

@Injectable()
export class CalendarEventsService {
    constructor(
        @InjectRepository(CalendarEvent)
        private readonly eventRepository: Repository<CalendarEvent>,
    ) { }

    async create(dto: CreateCalendarEventDto): Promise<CalendarEvent> {
        const event = this.eventRepository.create(dto);
        return this.eventRepository.save(event);
    }

    async findAll(): Promise<CalendarEvent[]> {
        return this.eventRepository.find();
    }

    async findOne(id: number): Promise<CalendarEvent> {
        const event = await this.eventRepository.findOne({ where: { id }});
        if (!event) throw new NotFoundException('Event not found');
        return event;
    }

    async update(id: number, dto: UpdateCalendarEventDto): Promise<CalendarEvent> {
        const event = await this.findOne(id);

        Object.assign(event, dto);
        return this.eventRepository.save(event);
    }

    async remove(id: number){
        const event = await this.findOne(id);
        return await this.eventRepository.remove(event);
    }
}
