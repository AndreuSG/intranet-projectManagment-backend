import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProjectsCentre } from '../projects/centre_projects/centre_projects.entity';

@Entity({ name: 'attachments' })
export class Attachment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    name: string;

    @Column({ length: 255 })
    url: string;

    @ManyToOne(() => ProjectsCentre, project => project.attachments, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'project_id' })
    project: ProjectsCentre;
}
