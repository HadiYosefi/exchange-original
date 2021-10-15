import { ConflictException, Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateCryptoDto } from "../dto/create.crypto.dto";
import {Crypto} from '../models/crypto.entity'

@Injectable()
@EntityRepository(Crypto)
export class CryptoRepository extends Repository<Crypto>
{
    async createCrypto(createCryptoDto:CreateCryptoDto):Promise<Crypto>
    {
        if(await this.findOne({where:{name:createCryptoDto.name,deleted:false}}))
        throw new ConflictException('This Crypto Aleardy Exist')
        if(await this.findOne({where:{symbol:createCryptoDto.symbol}}))
        throw new ConflictException('This Crypto Aleardy Exist')

        const crypto=new Crypto()
        crypto.name=createCryptoDto.name
        crypto.price=createCryptoDto.price
        crypto.icon=createCryptoDto.icon
        crypto.slug=createCryptoDto.slug
        crypto.symbol=createCryptoDto.symbol
        const saved_crypto=this.save(crypto)
        return saved_crypto
    }
}