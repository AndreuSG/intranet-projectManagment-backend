import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('estudis')
export class Study {
    @PrimaryColumn({ length: 10 })
    id: string;

    @Column({ length: 10 })
    etapa: string;

    @Column({ length: 255 })
    nom: string;
}
