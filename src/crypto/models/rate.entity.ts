import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Crypto } from './crypto.entity';
import { RateTypes } from './ratetype.entity';

@Entity()
export class Rate {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  date: Date;
  @Column()
  sellrate: number;
  @Column()
  buyrate: number;
  @ManyToOne(() => Crypto, (x) => x.obj_crypto_rate)
  @JoinColumn()
  obj_rate_crypto: Crypto;
  @ManyToMany(() => RateTypes)
  @JoinColumn()
  obj_ratetype: RateTypes[];
}
