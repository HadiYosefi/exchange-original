import { ConflictException, Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateBlockchainDto } from "../dto/create.blockchain.dto";
import { Blockchain } from "../models/blockchain.entity";

@Injectable()
@EntityRepository(Blockchain)
export class BlockchainRepository extends Repository<Blockchain>{

    async createBlockchain(createBlockchainDto:CreateBlockchainDto):Promise<Blockchain>
    {   if(await this.findOne({where:{name:createBlockchainDto.name,symbol:createBlockchainDto.symbol,deleted:false}}))
        throw new ConflictException('Blockchain Aleardy exist...!')
        const blockchain=new Blockchain()
        blockchain.name=createBlockchainDto.name
        blockchain.symbol=createBlockchainDto.symbol.toUpperCase()
        blockchain.crypto=createBlockchainDto.crypto
        blockchain.icon=createBlockchainDto.icon
        const saved_blockchain=this.save(blockchain)
    return saved_blockchain
    }

}
