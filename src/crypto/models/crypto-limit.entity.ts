import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CryptoLimit{
@PrimaryGeneratedColumn('uuid')
id:string

@Column()
min_withdraw:number

@Column()
min_deposit:number

@Column()
min_buy:number

@Column()
max_buy:number

@Column()
min_sell:number

@Column()
max_sell:number
}