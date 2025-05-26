import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CurrModul } from '../curr_modul/curr_modul.entity';
import { User } from '../user/user.entity';
import { CursGrup } from '../curs_grup/curs_grup.entity';

@Entity({ name: 'dates_modul_projectes' })
export class DataModulProjecte {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({ name: 'idmodul' })
   idModul: number;

   @ManyToOne(() => CurrModul)
   @JoinColumn({ name: 'idmodul' })
   modul: CurrModul;

   @Column({ name: 'idprofe' })
   idProfe: number;

   @ManyToOne(() => User)
   @JoinColumn({ name: 'idprofe' })
   profe: User;

   @Column({ name: 'idgrup' })
   idGrup: string;

   @ManyToOne(() => CursGrup)
   @JoinColumn({ name: 'idgrup' })
   grup: CursGrup;

   @Column({ name: 'data_inici', type: 'date' })
   dataInici: Date;
} 