import { Attachment } from 'src/domain/attachment/attachemt.entity';
import { User } from 'src/domain/user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity({ name: 'projectes_centre' })
export class ProjectsCentre {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    titol: string;

    @Column({ type: 'text', nullable: true })
    descripcio: string;

    @Column({ length: 100 })
    estudi: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'creat_per' })
    creatPer: User;
    
    @OneToMany(() => Attachment, attachment => attachment.project)
    attachments: Attachment[];
}
