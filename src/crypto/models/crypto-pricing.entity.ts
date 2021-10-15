import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CryptoPricing{
@PrimaryGeneratedColumn('uuid')
id:string

@Column()
target_exchange:string

@Column()
price_url:string

@Column()
price_parameter:string

@Column()
base_crypto:string


}