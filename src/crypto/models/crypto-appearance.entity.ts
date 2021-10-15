import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CryptoAppearance{
@PrimaryGeneratedColumn('uuid')
id:string

@Column()
text_color:string

@Column()
primary_color:string

@Column()
secondary_color:string

@Column()
alternative_color:string
}