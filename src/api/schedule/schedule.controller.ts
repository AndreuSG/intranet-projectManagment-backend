import { Controller, Get } from '@nestjs/common';
import { ScheduleService } from '../../domain/schedule/schedule.service';
import { Schedule } from '../../domain/schedule/schedule.entity';
import { API_BASE } from 'src/shared/constants/API';

@Controller(`${API_BASE}/schedule`)
export class ScheduleController {
   constructor(private readonly scheduleService: ScheduleService) { }

   @Get()
   async findAll(): Promise<Schedule[]> {
      return this.scheduleService.findAll();
   }
} 