import { Injectable } from '@nestjs/common';
import { AlumnesInSelectedModulsService } from '../../domain/alumnes_in_selected_moduls/alumnes-in-selected-moduls.service';

@Injectable()
export class AlumnesInSelectedModulsApiService {
    constructor(private readonly alumnesInSelectedModulsService: AlumnesInSelectedModulsService) {}

    async getAllStudents() {
        return await this.alumnesInSelectedModulsService.getAllStudents();
    }

    async getStudentsByModul(study: string) {
        return await this.alumnesInSelectedModulsService.getStudentsByModul(study);
    }

    async unsubscribe(idalus: string[]) {
        return await this.alumnesInSelectedModulsService.unsubscribe(idalus);
    }
}
