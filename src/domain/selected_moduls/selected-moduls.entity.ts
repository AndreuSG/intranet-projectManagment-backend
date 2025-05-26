import { CurrEstudis } from 'src/domain/curr_estudis/curr_estudis.entity';
import { CurrModul } from 'src/domain/curr_modul/curr_modul.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('selected_moduls')
export class SelectedModul {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => CurrModul)
    @JoinColumn({ name: 'idmodul' })
    idmodul: number;

    @ManyToOne(() => CurrEstudis)
    @JoinColumn({ name: 'idcurriculum' }) 
    idcurriculum: number;

    @Column()
    curs: string;
}
