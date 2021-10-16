import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateArchDto } from "../dto/create/create.arch.dto";
import { Arch } from "../models/arch.entity";
const camelCase=require('camelcase')

@Injectable()
@EntityRepository(Arch)
export class ArchRepository extends Repository<Arch>{

    async createArch(createArchDto:CreateArchDto):Promise<Arch>
    {
        
        
        
        
        if (await this.findOne({where:{name:createArchDto.name,deleted:false}}))
        throw new ConflictException('The Architecture aleardy exist...!') 
        const arch=new Arch()
        
        arch.name=camelCase(createArchDto.name)
        const saved_arch=this.save(arch)
        return saved_arch
    }

    async updateName( archId:string,updateNameDto:CreateArchDto):Promise<Arch>{
        const arch=await this.findOne({id:archId})
        if(!arch)
            throw new NotFoundException()
        arch.name=updateNameDto.name
        const saved_arch=await this.save(arch)
        return saved_arch

    }

    
    
}