import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { FiatRateUsdt } from "./fiat-rate-usdt.entity";

@Entity()
export class Fiat{
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column()
    name:string
    @Column()
    symbol_iso2:string
    @Column()
    symbol_iso3:string
    @Column()
    automatic:boolean
    @Column()
    url:string
    @Column()
    parameter:string

    @OneToMany(()=>FiatRateUsdt, c=>c.obj_fiat)
    @JoinColumn()
    obj_Fiat_Rate_Usdt:FiatRateUsdt[]
}