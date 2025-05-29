import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
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
}
