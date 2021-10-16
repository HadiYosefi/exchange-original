import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Like } from "typeorm";
import {  AssignArchToBlockchainDto } from "../dto/assign/assign-arch-to-blockchain.dto";
import { CreateArchDto } from "../dto/create/create.arch.dto";
import { Arch } from "../models/arch.entity";
import { ArchRepository } from "../repositories/arch.repository";
import { BlockchainRepository } from "../repositories/blockchain.repository";

@Injectable()
export class ArchService{
    constructor(
        @InjectRepository(ArchRepository) private archRepository:ArchRepository,
        @InjectRepository(BlockchainRepository) private blockchainRepository:BlockchainRepository
        )
    {}

    async createArch(createArchDto:CreateArchDto):Promise<Arch>
    {
        return await this.archRepository.createArch(createArchDto)
    }

    async getAllArch():Promise<Arch[]>
    {
        const getAll= await this.archRepository.find({where:{deleted:false},relations:['obj_blockchain']})
        return getAll
    }

    async deleteArch(id:string):Promise<void>
    {
        const arch=await this.archRepository.findOne({where:{id:id,deleted:false}})
        if(!arch)
        throw new BadRequestException('Arch not find or aleardy deleted')
        arch.deleted=true
        const saved_arch=this.archRepository.save(arch)
        return 
    }

    async assignArchToBlockchain(assignArchToBlockchainDto:AssignArchToBlockchainDto):Promise<Arch>
    {
        const arch= await this.archRepository.findOne({where:{id:assignArchToBlockchainDto.arch_id,deleted:false},relations:['obj_blockchain']})
        if(!arch)
        throw new NotFoundException('There is no architecture with this ID...!')
        const blockchain= await this.blockchainRepository.findOne({where:{id:assignArchToBlockchainDto.blockchain_id,deleted:false}})
        if(!blockchain)
        throw new NotFoundException('There is no blockchain with this ID...!')
        if(arch.obj_blockchain)
        throw new BadRequestException(`Arch aleardy have ${arch.obj_blockchain.name}`)
        arch.obj_blockchain=blockchain
        const savedArch= await this.archRepository.save(arch)
        return  savedArch
    }

    async findWithName(param:string):Promise<Arch[]>
    {
        const arch=await this.archRepository.find({where:{name:Like(`%${param}%`)}})
        if(!arch)
        throw new BadRequestException(`There is no arch for ${param} `)

        return arch

    }

    async updateArchName(archId:string,updateArchNameDto:CreateArchDto):Promise<Arch>{
        return await this.archRepository.updateName(archId,updateArchNameDto)
    }
}