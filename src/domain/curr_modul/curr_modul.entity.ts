// src/domain/curr-moduls/entity/curr-modul.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CurrEstudis } from '../curr_estudis/curr_estudis.entity';

@Entity({ name: 'curr_moduls' })
export class CurrModul {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nom: string;

    @Column()
    ordre: number;

    @ManyToOne(() => CurrEstudis, (currEstudi) => currEstudi.moduls)
    @JoinColumn({ name: 'curriculum' })
    curriculum: CurrEstudis;
}
