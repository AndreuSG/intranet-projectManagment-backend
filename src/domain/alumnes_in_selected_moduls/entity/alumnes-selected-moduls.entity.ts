import { Alumn } from 'src/domain/alumn/alumn.entity';
import { CurrEstudis } from 'src/domain/curr_estudis/curr_estudis.entity';
import { SelectedModul } from 'src/domain/selected_moduls/entity/selected-moduls.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

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
}
