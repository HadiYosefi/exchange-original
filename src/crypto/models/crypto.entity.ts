import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Blockchain } from "./blockchain.entity";
import { CryptoAppearance } from "./crypto-appearance.entity";
import { CryptoLimit } from "./crypto-limit.entity";
import { CryptoPricing } from "./crypto-pricing.entity";
import { PricingType } from "./enum/price.type.enum";

@Entity()
export class Crypto{
@PrimaryGeneratedColumn('uuid')
id:string

@Column()
name:string

@Column()
slug:string

@Column()
symbol:string

@Column()
icon:string

@Column()
price:number

@Column({default:PricingType.NONE})
pricing_type:PricingType

@Column({default:false})
is_default:boolean

@Column({default:false})
is_desabled:boolean

@Column({default:false})
is_invest:boolean

@Column({default:true})
is_gateway:boolean

@Column({default:true})
is_withdrawable:boolean

@Column({default:true})
is_depositable:boolean

@Column({default:false})
deleted:boolean



@ManyToOne(()=>Blockchain,c=>c.obj_cryptos)
@JoinColumn()
obj_blockchain:Blockchain

@OneToOne(()=>CryptoPricing)
@JoinColumn()
obj_crypto_pricing:CryptoPricing

@OneToOne(()=>CryptoAppearance)
@JoinColumn()
obj_crypto_appearance:CryptoAppearance

@OneToOne(()=>CryptoLimit)
@JoinColumn()
obj_crypto_limit:CryptoLimit
}