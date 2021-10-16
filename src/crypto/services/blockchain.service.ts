import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Like, Repository } from "typeorm";
import { AssignBlockchainToCryptoDto } from "../dto/assign/assign-blockchain-to-crypto.dto";
import { CreateBlockchainDto } from "../dto/create/create.blockchain.dto";
import { Blockchain } from "../models/blockchain.entity";
import { BlockchainRepository } from "../repositories/blockchain.repository";
import {Crypto} from '../models/crypto.entity'
import { CryptoRepository } from "../repositories/crypto.repository";

@Injectable()
export class BlockchainService{
    constructor(
        @InjectRepository(BlockchainRepository) private blockchainRepository:BlockchainRepository,
        @InjectRepository(CryptoRepository) private cryptoRepository:CryptoRepository
    )
    {}

    async createBlockchain(createBlockchainDto:CreateBlockchainDto):Promise<any>
    {
        return await this.blockchainRepository.createBlockchain(createBlockchainDto)
    }

    async getAllBlockchain():Promise<Blockchain[]>
    {
        return await this.blockchainRepository.find({where:{deleted:false},relations:['obj_cryptos']})
    }

    async deleteBlockchain(id:string):Promise<void>
    {
        const blockchain=await this.blockchainRepository.findOne({where:{id:id,deleted:false}})
        if(!blockchain)
        throw new BadRequestException('There is no blockchain or aleardy deleted')
        blockchain.deleted=true
        const saved_blockchain=this.blockchainRepository.save(blockchain)
        return

    }

    async assignBlockchainToCrypto(assignBlockchainToCryptoDto:AssignBlockchainToCryptoDto):Promise<Blockchain>
    {   const blockchain= await this.blockchainRepository.findOne({where:{id:assignBlockchainToCryptoDto.blockchain_id,deleted:false},relations:['obj_cryptos']})
        if(!blockchain)
        throw new NotFoundException('There is no blockchain with id you sent....!')
        const crypto=await this.cryptoRepository.findOne({where:{id:assignBlockchainToCryptoDto.crypto_id,deleted:false}})
        if(!crypto)
        throw new NotFoundException('There is no crypto for id you sent ...!')
        blockchain.obj_cryptos.push(crypto)
        const savedBlockchain=await this.blockchainRepository.save(blockchain)
        
        return savedBlockchain

    }

    async findByNameOrSymbol(param:string):Promise<Blockchain[]>
    {
        const blockchain=await this.blockchainRepository.find(
            {where:[{name:Like(`%${param}%`)},
                    {symbol:Like(`%${param.toUpperCase()}%`)}
        ]},
            
            
        )
        if(!blockchain)
        throw new BadRequestException('There is no blockchain')
        return blockchain
    }
}