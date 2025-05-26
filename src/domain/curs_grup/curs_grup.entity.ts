import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { CurrEstudis } from '../curr_estudis/curr_estudis.entity';

@Entity({ name: 'cursos_grups' })
export class CursGrup {
   @PrimaryColumn()
   id: string;

   @Column()
   estudis: string;

   @Column()
   curs: number;

   @Column()
   grup: string;

   @Column({ name: 'tutor', type: 'int', nullable: true })
   tutor: number;

   @Column()
   mostrar: string;
}
