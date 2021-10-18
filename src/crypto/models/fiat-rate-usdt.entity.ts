import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Fiat } from "./fiat.entity";

@Entity()
export class FiatRateUsdt{
@PrimaryGeneratedColumn('uuid')
id:string
@Column()
sell_rate:string
@Column()
buy_rate:string

@ManyToOne(()=>Fiat,c=>c.obj_Fiat_Rate_Usdt)
@JoinColumn()
obj_fiat:Fiat
}