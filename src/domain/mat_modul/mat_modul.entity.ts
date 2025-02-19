// src/domain/mat-moduls/entity/mat-modul.entity.ts

import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
// import { CurrModul } from 'src/domain/curr-moduls/entity/curr-modul.entity';

@Entity({ name: 'mat_moduls' })
export class MatModul {
    @PrimaryColumn()
    idmat: number;

    @PrimaryColumn()
    idmodul: number;

    @Column({ type: 'tinyint', default: 0 })
    matricula: number;

    // // Relación con `mat_matricules` (idmat -> idnum)
    // @ManyToOne(() => Matricula, (matricula) => matricula.matModuls, { onUpdate: 'CASCADE' })
    // matriculaRef: Matricula;

    // Relación con `curr_moduls` (idmodul -> id)
    
    // @ManyToOne(() => CurrModul, (modul) => modul.matModuls, { onUpdate: 'CASCADE' })
    // modulRef: CurrModul;
}
