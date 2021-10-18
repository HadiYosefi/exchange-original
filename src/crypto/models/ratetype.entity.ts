import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Rate } from './rate.entity';

@Entity()
export class RateTypes {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;

  @ManyToMany(() => Rate)
  @JoinColumn()
  obj_rate: Rate[];
}
