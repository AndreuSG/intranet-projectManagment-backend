import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CreateSelectedModulDto } from 'src/domain/selected_moduls/dto/create_selected_modul.dto';
import { SelectedModulsApiService } from './slected_moduls-api.service';
import { API_BASE } from 'src/shared/constants/API';
import { AdminGuard } from 'src/auth/guard/admin.guard';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@Controller(`${API_BASE}/selected-moduls`)
@UseGuards(JwtAuthGuard, AdminGuard)
export class SelectedModulsApiController {
  constructor(private readonly selectedModulsApiService: SelectedModulsApiService) {}

  @Post()
  async createModul(@Body() data: CreateSelectedModulDto[]) {
    return this.selectedModulsApiService.createModul(data);
  }

  @Get()
  async getAllModuls() {
    return this.selectedModulsApiService.getAllModuls();
  }
}
