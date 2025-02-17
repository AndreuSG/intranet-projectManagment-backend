import { Alumn } from 'src/domain/alumn/alumn.entity';
import { SelectedModul } from 'src/domain/selected_moduls/entity/selected-moduls.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('alumnes_selected_moduls')
export class AlumnesSelectedModuls {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Alumn)
    @JoinColumn({ name: 'idalumne' })
    idalumne: Alumn;

    @ManyToOne(() => SelectedModul)
    @JoinColumn({ name: 'idmodul' })
    idmodul: SelectedModul;

    @Column({ default: true })
    active: boolean;
}
