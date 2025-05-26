import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Rubric } from '../rubric/rubric.entity';
import { RubricLevel } from '../rubric-level/rubric-level.entity';

@Entity({ name: 'rubriques_criteri' })
export class RubricCriterion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'rubrica_id', unsigned: true })
    rubricaId: number;

    @ManyToOne(() => Rubric, rubric => rubric.criteria, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'rubrica_id' })
    rubric: Rubric;

    @Column({ length: 100 })
    nom: string;

    @Column({ type: 'text', nullable: true })
    descripcio?: string;

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
    pes: number;

    @OneToMany(() => RubricLevel, level => level.criterion)
    levels: RubricLevel[];
}
