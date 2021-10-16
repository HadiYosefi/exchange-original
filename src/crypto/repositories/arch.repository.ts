import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateArchDto } from "../dto/create/create.arch.dto";
import { Arch } from "../models/arch.entity";

@Injectable()
@EntityRepository(Arch)
export class ArchRepository extends Repository<Arch>{

    async createArch(createArchDto:CreateArchDto):Promise<Arch>
    {
        if (await this.findOne({where:{name:createArchDto.name,deleted:false}}))
        throw new ConflictException('The Architecture aleardy exist...!') 
        const arch=new Arch()
        arch.name=createArchDto.name
        const saved_arch=this.save(arch)
        return saved_arch
    }

    // async deleteArch(id:string):Promise<any>
    // {
    //     console.log(id);
    //     const findArch= await this.findOne(id)
    //     if (findArch)
    //     {
    //        findArch.deleted=true
    //     } else {
    //         throw new NotFoundException('There is no arch with this id...!')
    //     }
        
        
    // }
    
}