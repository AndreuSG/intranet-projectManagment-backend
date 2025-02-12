import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'alumnes' })
export class Alumn {
    @PrimaryColumn()
    idalu: string;

    @Column()
    nom_alumne?: string;

    @Column()
    cognoms_alumne?: string;

    @Column()
    dni_alumne?: string;

    @Column({ type: 'tinyint', width: 4 })
    foto?: number;
}
