import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SelectedModul } from './entity/selected-moduls.entity';
import { CreateSelectedModulDto } from './dto/create_selected_modul.dto';
import { LOG } from 'src/shared/utils/log';


@Injectable()
export class SelectedModulsService {
    constructor(
        @InjectRepository(SelectedModul)
        private readonly selectedModulsRepository: Repository<SelectedModul>,
    ) {}
    
    async createModul(data: CreateSelectedModulDto[]) {
        const existingModuls = await this.findAll();
    
        // Convertir los valores en strings para comparaciones más precisas
        const existingSet = new Set(existingModuls.map(m => `${m.idmodul}-${m.idcurriculum}`));
        const newSet = new Set(data.map(m => `${m.idmodul}-${m.idcurriculum}`));
    
        // Módulos a eliminar (existen en la BD pero no en el nuevo objeto)
        const toDelete = existingModuls
            .filter(m => !newSet.has(`${m.idmodul}-${m.idcurriculum}`))
            .map(m => ({ idmodul: m.idmodul, idcurriculum: m.idcurriculum }));
    
        // Módulos a añadir (están en el nuevo objeto pero no en la BD)
        const toInsert = data.filter(m => !existingSet.has(`${m.idmodul}-${m.idcurriculum}`));
    
        // Eliminar módulos que ya no están seleccionados
        if (toDelete.length > 0) {
            await this.selectedModulsRepository
                .createQueryBuilder()
                .delete()
                .where(
                    toDelete.map(m => `idmodul = ${m.idmodul} AND idcurriculum = ${m.idcurriculum}`).join(' OR ')
                )
                .execute();
        }
    
        // Insertar nuevos módulos seleccionados
        if (toInsert.length > 0) {
            const newEntries = toInsert.map(m => this.selectedModulsRepository.create(m));
            await this.selectedModulsRepository.save(newEntries);
        }
    
        LOG.log(`Moduls updated - Added: ${toInsert.length}, Removed: ${toDelete.length}`);
    }
    
    

    async findAll() {
        return await this.selectedModulsRepository
            .createQueryBuilder('selectedModul')
            .select([
                'selectedModul.idmodul AS idmodul',
                'selectedModul.idcurriculum AS idcurriculum',
            ])
            .leftJoin('selectedModul.idmodul', 'currModul')
            .leftJoin('selectedModul.idcurriculum', 'currEstudis')
            .getRawMany();
    }
    
    
}