import { Injectable, NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateCryptoLimitDto } from "../dto/create/create.crypto.limit.dto";
import { UpdateCryptoLimitDto } from "../dto/update/update-crypto-limit.dto";
import { CryptoLimit } from "../models/crypto-limit.entity";
@Injectable()
@EntityRepository(CryptoLimit)
export class CryptoLimitRepository extends Repository<CryptoLimit>{

    async createCryptoLimit(createCryptoLimitDto: CreateCryptoLimitDto): Promise<CryptoLimit> {
        const cryptoLimit = new CryptoLimit()
        cryptoLimit.max_buy = createCryptoLimitDto.max_buy
        cryptoLimit.max_sell = createCryptoLimitDto.max_sell
        cryptoLimit.min_buy = createCryptoLimitDto.min_buy
        cryptoLimit.min_deposit = createCryptoLimitDto.min_deposit
        cryptoLimit.min_sell = createCryptoLimitDto.min_sell
        cryptoLimit.min_withdraw = createCryptoLimitDto.min_withdraw
        const saved_limit = this.save(cryptoLimit)
        return saved_limit

    }

    async updateCryptoLimit(crypto_limit_id: string, updateCryptoLimitDto: UpdateCryptoLimitDto): Promise<CryptoLimit> {
        const crypto_limit = await this.findOne({ where: { id: crypto_limit_id } })
        if (!crypto_limit)
            throw new NotFoundException('There is no crypto Limit')
        crypto_limit.min_withdraw = updateCryptoLimitDto.min_withdraw
        crypto_limit.min_deposit = updateCryptoLimitDto.min_deposit
        crypto_limit.min_buy = updateCryptoLimitDto.min_buy
        crypto_limit.max_buy = updateCryptoLimitDto.max_buy
        crypto_limit.min_sell = updateCryptoLimitDto.min_sell
        crypto_limit.max_sell = updateCryptoLimitDto.max_sell
        const saved_crypto_limit = this.save(crypto_limit)
        return saved_crypto_limit
    }
}