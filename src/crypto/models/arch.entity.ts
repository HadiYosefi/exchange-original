import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Blockchain } from "./blockchain.entity";

@Entity()
export class Arch{
    findOne(arg0: { where: { id: string; }; }) {
        throw new Error("Method not implemented.");
    }

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    name:string

    @Column({default:false})
    deleted:boolean

    @OneToOne(()=>Blockchain,{cascade:true})
    @JoinColumn()
    obj_blockchain:Blockchain
}