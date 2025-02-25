import { Injectable } from '@nestjs/common';
import { CreateSelectedModulDto } from 'src/domain/selected_moduls/dto/create_selected_modul.dto';
import { SelectedModulsService } from 'src/domain/selected_moduls/selected-moduls.service';

@Injectable()
export class SelectedModulsApiService {
    constructor(private readonly selectedModulsService: SelectedModulsService) {}

    async createModul(data: CreateSelectedModulDto[]) {
        return await this.selectedModulsService.createModul(data);
    }

    async getAllModuls() {
        return await this.selectedModulsService.findAll();
    }
}
