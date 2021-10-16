import { ConflictException, Injectable } from "@nestjs/common";
import camelcase from "camelcase";
import { type } from "os";
import { EntityRepository, Repository } from "typeorm";
import { CreateCryptoDto } from "../dto/create/create.crypto.dto";
import { UpdateCryptoDto } from "../dto/update/update-crypto.dto";
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
        crypto.name=camelcase( createCryptoDto.name)
        crypto.price=createCryptoDto.price
        crypto.icon=createCryptoDto.icon
        crypto.slug=createCryptoDto.slug
        crypto.symbol=createCryptoDto.symbol.toUpperCase()
        const saved_crypto=this.save(crypto)

return saved_crypto
    }

    async updateCrypto(crypto_id,updateCryptoDto:UpdateCryptoDto):Promise<Crypto>
    {
        const crypto=await this.findOne({where:{id:crypto_id}})
        crypto.name=updateCryptoDto.name
        crypto.slug=updateCryptoDto.slug
        crypto.symbol=updateCryptoDto.symbol
        crypto.icon=updateCryptoDto.icon
        crypto.price=updateCryptoDto.price
        crypto.pricing_type=updateCryptoDto.pricing_type
        crypto.is_default=updateCryptoDto.is_default
        crypto.is_desabled=updateCryptoDto.is_desabled
        crypto.is_invest=updateCryptoDto.is_invest
        crypto.is_gateway=updateCryptoDto.is_gateway
        crypto.is_withdrawable=updateCryptoDto.is_withdrawable
        crypto.is_depositable=updateCryptoDto.is_depositable
        const saved_crypto=this.save(crypto)
        return saved_crypto
    }
}