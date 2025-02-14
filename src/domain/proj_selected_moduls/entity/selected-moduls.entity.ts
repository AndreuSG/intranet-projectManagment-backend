import { CurrModul } from 'src/domain/curr_modul/curr_modul.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('selected_moduls')
export class SelectedModul {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => CurrModul)
    @JoinColumn({ name: 'idmodul' })
    idmodul: CurrModul;

    @Column({ length: 100 })
    nom_modul: string;

    @Column({ length: 60 })
    estudis: string;
}
