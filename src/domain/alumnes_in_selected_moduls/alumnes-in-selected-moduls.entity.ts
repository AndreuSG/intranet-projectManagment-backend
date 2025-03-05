import { Alumn } from 'src/domain/alumn/alumn.entity';
import { ProjectsAlumn } from 'src/domain/projects/projects_alumn/projects_alumn.entity';
import { CurrEstudis } from 'src/domain/curr_estudis/curr_estudis.entity';
import { SelectedModul } from 'src/domain/selected_moduls/selected-moduls.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';

@Entity('alumnes_in_selected_moduls')
export class AlumnesInSelectedModuls {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Alumn)
    @JoinColumn({ name: 'idalu' })
    idalu: string;

    @ManyToOne(() => SelectedModul)
    @JoinColumn({ name: 'idmodul' })
    idmodul: SelectedModul;
    
    @ManyToOne(() => CurrEstudis)
    @JoinColumn({ name: 'idcurriculum' })
    idcurriculum: CurrEstudis;

    @Column({ default: true })
    active: boolean;

    @ManyToMany(() => ProjectsAlumn, (projecte) => projecte.alumnesAssignats)
    projectes: ProjectsAlumn[];
}
