import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Arch } from "./arch.entity";
import {Crypto} from '../models/crypto.entity'

@Entity()
export class Blockchain{
@PrimaryGeneratedColumn('uuid')
id:string

@Column()
name:string

@Column()
symbol:string

@Column()
icon:string

@Column()
crypto:string

@Column({default:false})
deleted:boolean


@OneToOne(()=>Arch,{cascade:true})
@JoinColumn()
obj_arch:Arch

@OneToMany(()=>Crypto,c=>c.obj_blockchain)
@JoinColumn()
obj_cryptos:Crypto[]
}