import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { LOG } from 'src/shared/utils/log';
import { AlumnesInSelectedModuls } from './alumnes-in-selected-moduls.entity';
import { AlumnService } from '../alumn/alumn.service';

@Injectable()
export class AlumnesInSelectedModulsService {
    constructor(
        @InjectRepository(AlumnesInSelectedModuls)
        private readonly alumnesInSelectedModulsRepository: Repository<AlumnesInSelectedModuls>,
        private readonly alumnService: AlumnService,
    ) {}

    async insertAlumnesForModuls(moduls: { idmodul: number; idcurriculum: number }[]) {
        for (const modul of moduls) {
            const alumnes = await this.alumnService.findAlumnesByModulAndCurr(modul.idmodul, modul.idcurriculum);

            console.log('Alumnes:', alumnes);

            if (alumnes.length === 0) {
                LOG.log(`No alumnes found for modul ${modul.idmodul} and curriculum ${modul.idcurriculum}`);
                continue;
            };

            const existingAlumnes = await this.alumnesInSelectedModulsRepository.find({
                where: { idmodul: { id: modul.idmodul }, idcurriculum: { id: modul.idcurriculum } }
            });

            const existingSet = new Set(existingAlumnes.map(a => a.idalu));

            const newAlumnes = alumnes
                .filter(a => !existingSet.has(a.idalu))
                .map(a => ({
                    idalu: a.idalu,
                    idmodul: { id: modul.idmodul },
                    idcurriculum: { id: modul.idcurriculum }, 
                    active: true,
                }));

            if (newAlumnes.length > 0) {
                await this.alumnesInSelectedModulsRepository.save(newAlumnes);
                LOG.log(`Inserted ${newAlumnes.length} alumnes for modul ${modul.idmodul} and curriculum ${modul.idcurriculum}`);
            }
        }
    }

    
    async removeAlumnesFromModuls(moduls: { idmodul: number; idcurriculum: number }[]) {
        for (const modul of moduls) {
            await this.alumnesInSelectedModulsRepository
                .createQueryBuilder()
                .delete()
                .where('idmodul = :idmodul', { idmodul: modul.idmodul })
                .andWhere('idcurriculum = :idcurriculum', { idcurriculum: modul.idcurriculum })
                .execute();

            LOG.log(`Removed alumnes for modul ${modul.idmodul}`);
        }
    }

    async getAllStudents() {
        return await this.alumnesInSelectedModulsRepository
            .createQueryBuilder('ais')
            .select([
                'ais.id AS id',
                'a.idalu AS idalu',
                "CONCAT(a.cognoms_alumne, ', ', a.nom_alumne) AS nom_complet",
                "CONCAT(a.idsapa, '@sapalomera.cat') AS email",
                'ce.estudis AS estudis'
            ])
            .innerJoin('alumnes', 'a', 'ais.idalu = a.idalu')
            .innerJoin('curr_estudis', 'ce', 'ais.idcurriculum = ce.id')
            .where('ais.active = :active', { active: true })
            .orderBy('ce.estudis', 'ASC')
            .addOrderBy('a.cognoms_alumne', 'ASC')
            .getRawMany();
    }

    async unsubscribe(idalus: string[]) {
        return await this.alumnesInSelectedModulsRepository.update(
            { idalu: In(idalus) },
            { active: false },
        );
    }

    async findByIds(ids: number[]) {
        return await this.alumnesInSelectedModulsRepository.findBy({ id: In (ids)});
    }

    async getStudentsByModul(study: string) {
        return await this.alumnesInSelectedModulsRepository
            .createQueryBuilder('ais')
            .select([
                'ais.id AS id',
                'a.idalu AS idalu',
                "CONCAT(a.cognoms_alumne, ', ', a.nom_alumne) AS nom_complet",
                "CONCAT(a.idsapa, '@sapalomera.cat') AS email",
                'ce.estudis AS estudis'
            ])
            .innerJoin('alumnes', 'a', 'ais.idalu = a.idalu')
            .innerJoin('curr_estudis', 'ce', 'ais.idcurriculum = ce.id')
            .where('ais.active = :active', { active: true })
            .andWhere('ce.estudis = :estudis', { estudis: study })
            .orderBy('ce.estudis', 'ASC')
            .addOrderBy('a.cognoms_alumne', 'ASC')
            .getRawMany();
    }
}
