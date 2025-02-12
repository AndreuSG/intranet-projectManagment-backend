// src/domain/curr-moduls/entity/curr-modul.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'curr_moduls' })
export class CurrModul {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nom: string;
}
