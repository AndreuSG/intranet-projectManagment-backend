// src/domain/rubrics/rubric.entity.ts
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { RubricCourse } from '../rubric-courses/rubric-course.entity'; // <-- tu grupo
import { RubricCriterion } from '../rubric-criterion/rubric-criterion.entity';

@Entity({ name: 'rubriques' })
export class Rubric {
    @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    id: number;

    /* FK al grupo (rubriques_grup) */
    @Column({ name: 'rubriques_grup_id', type: 'int', unsigned: true })
    rubriquesGrupId: number;

    @ManyToOne(() => RubricCourse, course => course.rubrics, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'rubriques_grup_id' })
    course: RubricCourse;

    /* datos propios */
    @Column({ length: 100 })
    nom: string;

    @Column({ type: 'text', nullable: true })
    descripcio?: string;

    @Column({
        name: 'puntuacio_max',
        type: 'decimal',
        precision: 4,
        scale: 2,
        default: 4.0
    })
    puntuacioMax: number;

    @OneToMany(() => RubricCriterion, criterion => criterion.rubric)
    criteria: RubricCriterion[];
}
