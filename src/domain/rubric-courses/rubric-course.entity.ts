import { Entity, PrimaryGeneratedColumn, Column, OneToMany,} from 'typeorm';
import { Rubric } from '../rubric/rubric.entity';
@Entity('rubriques_grup')
export class RubricCourse {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'nom' })
    name: string;

    @Column({ name: 'descripcio', nullable: true })
    description?: string;

    @Column({ name: 'imatge', nullable: true })
    imageUrl?: string;

    @OneToMany(() => Rubric, rubric => rubric.course)
    rubrics: Rubric[];
}