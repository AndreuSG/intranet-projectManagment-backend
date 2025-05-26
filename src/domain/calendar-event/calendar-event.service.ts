import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { CalendarEvent } from './calendar-event.entity';
import { GroupStudy } from '../group_study/group_study.entity';
import { CreateCalendarEventDto } from './dto/create-calendar-event.dto';
import { UpdateCalendarEventDto } from './dto/update-calendar-event.dto';


@Injectable()
export class CalendarEventsService {
    constructor(
        @InjectRepository(CalendarEvent)
        private readonly eventRepository: Repository<CalendarEvent>,
        @InjectRepository(GroupStudy)
        private readonly groupRepository: Repository<GroupStudy>,
    ) { }

    // async create(dto: CreateCalendarEventDto): Promise<CalendarEvent> {
    //     const groups = await this.groupRepository.findBy({ id: In(dto.group_ids) });
    //     const event = this.eventRepository.create({ ...dto, groups });
    //     return this.eventRepository.save(event);
    // }

    // async findAll(): Promise<CalendarEvent[]> {
    //     return this.eventRepository.find({ relations: ['groups'] });
    // }

    // async findOne(id: number): Promise<CalendarEvent> {
    //     const event = await this.eventRepository.findOne({ where: { id }, relations: ['groups'] });
    //     if (!event) throw new NotFoundException('Event not found');
    //     return event;
    // }

    // async update(id: number, dto: UpdateCalendarEventDto): Promise<CalendarEvent> {
    //     const event = await this.findOne(id);
    //     // const groups = await this.groupRepository.findBy({ id: In(dto.group_ids) });
    //     // Object.assign(event, dto);
    //     // event.groups = groups;
    //     return this.eventRepository.save(event);
    // }

    // async remove(id: number): Promise<void> {
    //     const event = await this.findOne(id);
    //     await this.eventRepository.remove(event);
    // }
}
