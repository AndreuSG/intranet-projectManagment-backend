import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { RubricCriterion } from '../rubric-criterion/rubric-criterion.entity';

@Entity({ name: 'rubriques_nivell' })
export class RubricLevel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'criteri_id' })
  criteriId: number;

  @ManyToOne(() => RubricCriterion, c => c.levels, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'criteri_id' })
  criterion: RubricCriterion;

  @Column({ length: 100 })
  nom: string;

  @Column({ type: 'int' })
  valor: number;

  @Column({ type: 'text', nullable: true })
  descripcio?: string;
}
