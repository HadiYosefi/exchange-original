import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateCryptoLimitDto } from "../dto/create/create.crypto.limit.dto";
import { CryptoLimit } from "../models/crypto-limit.entity";
@Injectable()
@EntityRepository(CryptoLimit)
export class CryptoLimitRepository extends Repository<CryptoLimit>{

    async createCryptoLimit(createCryptoLimitDto:CreateCryptoLimitDto):Promise<CryptoLimit>
    {   
        const cryptoLimit=new CryptoLimit()
        cryptoLimit.max_buy=createCryptoLimitDto.max_buy
        cryptoLimit.max_sell=createCryptoLimitDto.max_sell
        cryptoLimit.min_buy=createCryptoLimitDto.min_buy
        cryptoLimit.min_deposit=createCryptoLimitDto.min_deposit
        cryptoLimit.min_sell=createCryptoLimitDto.min_sell
        cryptoLimit.min_withdraw=createCryptoLimitDto.min_withdraw
        const saved_limit=this.save(cryptoLimit)
        return saved_limit
        
    }
}