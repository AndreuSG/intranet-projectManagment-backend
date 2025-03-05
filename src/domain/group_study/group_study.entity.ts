import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { User } from '../user/user.entity';


@Entity('moduls_profes')
export class GroupStudy {

    @PrimaryColumn({ name: 'idmodul', type: 'int' })
    idmodul: number;

    @PrimaryColumn({ name: 'idprofe', type: 'int' })
    idprofe: number;

    @PrimaryColumn( { name: 'idgrup', type: 'int' } )
    idgrup: string;

    @ManyToOne(() => User, (user) => user.groupStudies)
    @JoinColumn({ name: 'idprofe' })
    user: User;
}

