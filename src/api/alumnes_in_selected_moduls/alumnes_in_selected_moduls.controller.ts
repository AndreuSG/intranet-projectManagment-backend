import { Body, Controller, Get, Put } from '@nestjs/common';
import { API_BASE } from 'src/shared/constants/API';
import { AlumnesInSelectedModulsApiService } from './alumnes_in_selected_moduls.service';
import { UnsubscribeStudentsDto } from 'src/domain/alumnes_in_selected_moduls/dto/unsubscribe-students.dto';

@Controller(`${API_BASE}/students`)
export class AlumnesInSelectedModulsApiController {
    constructor(private readonly alumnesInSelectedModulsApiService: AlumnesInSelectedModulsApiService) {}

    @Get()
    async getAllStudents() {
        return await this.alumnesInSelectedModulsApiService.getAllStudents();
    }

    @Put('unsubscribe')
    async unsubscribe(@Body() dto: UnsubscribeStudentsDto) {
        return await this.alumnesInSelectedModulsApiService.unsubscribe(dto.idalus);
    }
}
