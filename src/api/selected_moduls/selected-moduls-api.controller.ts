import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateSelectedModulDto } from 'src/domain/selected_moduls/dto/create_selected_modul.dto';
import { SelectedModulsApiService } from './slected_moduls-api.service';
import { API_BASE } from 'src/shared/constants/API';

@Controller(`${API_BASE}/selected-moduls`)
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
