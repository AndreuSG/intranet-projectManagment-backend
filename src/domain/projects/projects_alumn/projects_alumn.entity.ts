import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';
import { AlumnesInSelectedModuls } from '../../alumnes_in_selected_moduls/alumnes-in-selected-moduls.entity';
import { User } from 'src/domain/user/user.entity';

@Entity({ name: 'projectes_alumne' })
export class ProjectsAlumn {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    titol: string;

    @Column({ length: 100 })
    estudi: string;

    @Column({ type: 'text', nullable: true })
    descripcio: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'creat_per' })
    creatPer: User;

    @ManyToMany(() => AlumnesInSelectedModuls)
    @JoinTable({
        name: 'alumnes_in_selected_moduls_projectes',
        joinColumn: { name: 'projecte_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'alumne_selected_id', referencedColumnName: 'id' }
    })
    alumnesAssignats: AlumnesInSelectedModuls[];
}
