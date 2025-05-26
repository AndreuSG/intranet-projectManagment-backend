import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('config')
export class Config {
   @PrimaryColumn()
   code: string;

   @Column({ type: 'text' })
   value: string;
}
