import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { API_BASE } from 'src/shared/constants/API';
import { AlumnesInSelectedModulsApiService } from './alumnes_in_selected_moduls-api.service';
import { UnsubscribeStudentsDto } from 'src/domain/alumnes_in_selected_moduls/dto/unsubscribe-students.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { AdminGuard } from 'src/auth/guard/admin.guard';

@Controller(`${API_BASE}/students`)
@UseGuards(JwtAuthGuard, AdminGuard)

export class AlumnesInSelectedModulsApiController {
    constructor(
        private readonly alumnesInSelectedModulsApiService: AlumnesInSelectedModulsApiService,
    ) {}

    @Get()
    async getAllStudents() {
        return await this.alumnesInSelectedModulsApiService.getAllStudents();
    }

    @Get("study/:study")
    async getStudentsByModul(@Param('study') study: string) {
        return await this.alumnesInSelectedModulsApiService.getStudentsByModul(study);
    }

    @Put('unsubscribe')
    async unsubscribe(@Body() dto: UnsubscribeStudentsDto) {
        return await this.alumnesInSelectedModulsApiService.unsubscribe(dto.idalus);
    }
}