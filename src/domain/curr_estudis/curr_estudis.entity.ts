// src/domain/curr-estudis/entity/curr-estudis.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CurrModul } from '../curr_modul/curr_modul.entity';

@Entity({ name: 'curr_estudis' })
export class CurrEstudis {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 5 })
    curriculum: string;

    @OneToMany(() => CurrModul, (currModul) => currModul.curriculum)
    moduls: CurrModul[];
}
