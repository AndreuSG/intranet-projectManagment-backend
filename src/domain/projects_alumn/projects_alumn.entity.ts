import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { AlumnesInSelectedModuls } from '../alumnes_in_selected_moduls/alumnes-in-selected-moduls.entity';

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

    @ManyToMany(() => AlumnesInSelectedModuls)
    @JoinTable({
        name: 'alumnes_projectes',
        joinColumn: { name: 'projecte_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'alumne_selected_id', referencedColumnName: 'id' }
    })
    alumnesAssignats: AlumnesInSelectedModuls[];
}
