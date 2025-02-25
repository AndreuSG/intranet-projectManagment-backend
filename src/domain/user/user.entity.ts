import { ProjectsCentre } from 'src/domain/centre_projects/centre_projects.entity';
import { USER_ROLE } from 'src/shared/enums/user.role';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'usuaris' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 256 })
  usuari: string;

  @Column({ type: 'tinyint', default: 1 })
  actiu: number;

  @Column({ type: 'tinyint', default: 0 })
  admin: number;

  @Column({ length: 10 })
  tipus: USER_ROLE;

  @Column({ nullable: true, length: 72 })
  password: string;

  @Column({ nullable: true, length: 12 })
  dni: string;

  @Column({ length: 45 })
  nom: string;

  @Column({ length: 45 })
  cognoms: string;

  @OneToMany(() => ProjectsCentre, (projecte) => projecte.creatPer)
  projectes: ProjectsCentre[];

}
