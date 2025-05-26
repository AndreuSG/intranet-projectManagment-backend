import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SelectedModul } from './selected-moduls.entity';
import { CreateSelectedModulDto } from './dto/create_selected_modul.dto';
import { LOG } from 'src/shared/utils/log';
import { AlumnesInSelectedModulsService } from '../alumnes_in_selected_moduls/alumnes-in-selected-moduls.service';


@Injectable()
export class SelectedModulsService {
    constructor(
        @InjectRepository(SelectedModul)
        private readonly selectedModulsRepository: Repository<SelectedModul>,
        private readonly alumnesInSelectedModulsService: AlumnesInSelectedModulsService,
    ) {}
    
    async createModul(data: CreateSelectedModulDto[]) {
        const existingModuls = await this.findAll().then(res => res.map(m => ({ idmodul: m.idmodul, idcurriculum: m.idcurriculum, curs: m.course })));
    
        const existingSet = new Set(existingModuls.map(m => `${m.idmodul}-${m.idcurriculum}-${m.curs}`));
        const newSet = new Set(data.map(m => `${m.idmodul}-${m.idcurriculum}-${m.course}`));
    
        const toDelete = existingModuls
            .filter(m => !newSet.has(`${m.idmodul}-${m.idcurriculum}-${m.curs}`))
            .map(m => ({ idmodul: m.idmodul, idcurriculum: m.idcurriculum, curs: m.curs }));
    
        const toInsert = data.map(m => ({ idmodul: m.idmodul, idcurriculum: m.idcurriculum, curs: m.course })).filter(m => !existingSet.has(`${m.idmodul}-${m.idcurriculum}-${m.curs}`));
    
        if (toDelete.length > 0) {
            await this.selectedModulsRepository
                .createQueryBuilder()
                .delete()
                .where(
                    toDelete.map(m => `idmodul = ${m.idmodul} AND idcurriculum = ${m.idcurriculum} AND curs = '${m.curs}'`).join(' OR ')
                )
                .execute();
                await this.alumnesInSelectedModulsService.removeAlumnesFromModuls(toDelete);
        }
    
        if (toInsert.length > 0) {
            const newEntries = toInsert.map(m => this.selectedModulsRepository.create(m));
            await this.selectedModulsRepository.save(newEntries);
            await this.alumnesInSelectedModulsService.insertAlumnesForModuls(toInsert);
        }
    
        LOG.log(`Moduls updated - Added: ${toInsert.length}, Removed: ${toDelete.length}`);
    }
    
    

    async findAll() {
        return await this.selectedModulsRepository
            .createQueryBuilder('selectedModul')
            .select([
                'selectedModul.idmodul AS idmodul',
                'selectedModul.idcurriculum AS idcurriculum',
                'selectedModul.curs AS course'
            ])
            .leftJoin('selectedModul.idmodul', 'currModul')
            .leftJoin('selectedModul.idcurriculum', 'currEstudis')
            .getRawMany();
    }
    
    
}