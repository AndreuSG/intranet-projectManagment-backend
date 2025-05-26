import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CurrModul } from '../curr_modul/curr_modul.entity';
import { User } from '../user/user.entity';
import { CursGrup } from '../curs_grup/curs_grup.entity';

@Entity('kw_solucio')
export class Schedule {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({ length: 10 })
   assignatura: string;

   @ManyToOne(() => CurrModul)
   @JoinColumn({ name: 'assignatura', referencedColumnName: 'sigles' })
   currModul: CurrModul;   

   @Column({ length: 7 })
   color: string;

   @Column({ length: 10 })
   profe: string;

   @ManyToOne(() => User)
   @JoinColumn({ name: 'profe', referencedColumnName: 'usuari' })
   user: User;

   @Column({ length: 10, nullable: true })
   grup: string;

   @ManyToOne(() => CursGrup)
   @JoinColumn({ name: 'grup' })
   cursGrup: CursGrup;

   @Column({ length: 10, nullable: true })
   aula: string;

   @Column()
   dia: number;

   @Column()
   franja: number;

   @Column()
   ini: number;

   @Column()
   fin: number;
} 