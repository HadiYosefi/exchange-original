import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import camelcase from "camelcase";
import { EntityRepository, Repository } from "typeorm";
import { CreateBlockchainDto } from "../dto/create/create.blockchain.dto";
import { UpdateBlockchainDto } from "../dto/update/update-blockchain.dto";
import { Blockchain } from "../models/blockchain.entity";

@Injectable()
@EntityRepository(Blockchain)
export class BlockchainRepository extends Repository<Blockchain>{

    async createBlockchain(createBlockchainDto: CreateBlockchainDto): Promise<Blockchain> {
        if (await this.findOne({ where: { name: createBlockchainDto.name, symbol: createBlockchainDto.symbol, deleted: false } }))
            throw new ConflictException('Blockchain Aleardy exist...!')
        const blockchain = new Blockchain()
        blockchain.name = camelcase(createBlockchainDto.name)
        blockchain.symbol = createBlockchainDto.symbol.toUpperCase()
        blockchain.crypto = createBlockchainDto.crypto
        blockchain.icon = createBlockchainDto.icon
        const saved_blockchain = this.save(blockchain)
        return saved_blockchain
    }

    async updateBlockchain(blockchain_id: string, updateBlockchainDto: UpdateBlockchainDto): Promise<Blockchain> {
        const blockchain = await this.findOne({ where: { id: blockchain_id, deleted: false } })
        if (!blockchain)
            throw new NotFoundException(`There is no blockchain for id  ${blockchain_id}`)
        blockchain.name = updateBlockchainDto.name
        blockchain.icon = updateBlockchainDto.icon
        blockchain.symbol = updateBlockchainDto.symbol
        const saved_blockchain = this.save(blockchain)
        return saved_blockchain
    }
}
