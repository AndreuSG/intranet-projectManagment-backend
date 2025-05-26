import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { GroupStudy } from '../group_study/group_study.entity';

@Entity('calendar_events')
export class CalendarEvent {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @Column({ type: 'datetime' })
    start_time: Date;

    @Column({ type: 'datetime', nullable: true })
    end_time?: Date;

    @Column({ type: 'varchar', length: 20, nullable: true })
    color?: string;

    @ManyToMany(() => GroupStudy)
    @JoinTable({
        name: 'calendar_event_groups',
        joinColumn: { name: 'event_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'group_id', referencedColumnName: 'id' },
    })
    groups: GroupStudy[];

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
}
