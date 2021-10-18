import { Injectable, NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateCryptoPricingDto } from "../dto/create/create.crypto.pricing.dto";
import { UpdateCryptoPricingDto } from "../dto/update/update-crypto-pricing.dto";
import { CryptoPricing } from "../models/crypto-pricing.entity";
@Injectable()
@EntityRepository(CryptoPricing)
export class CryptoPricingRepository extends Repository<CryptoPricing>{


    async createCryptoPricing(createCryptoPricingDto: CreateCryptoPricingDto): Promise<CryptoPricing> {
        const cryptoPricing = new CryptoPricing()
        cryptoPricing.base_crypto = createCryptoPricingDto.base_crypto
        cryptoPricing.price_parameter = createCryptoPricingDto.price_parameter
        cryptoPricing.price_url = createCryptoPricingDto.price_url
        cryptoPricing.target_exchange = createCryptoPricingDto.target_exchange
        const saved_pricing = this.save(cryptoPricing)
        return saved_pricing
    }

    async updateCryptoPricing(crypto_pricing_id: string, updateCryptoPricingDto: UpdateCryptoPricingDto): Promise<CryptoPricing> {
        const crypto_pricing = await this.findOne({ where: { id: crypto_pricing_id } })
        if (!crypto_pricing)
            throw new NotFoundException('nothing there')
        crypto_pricing.target_exchange = updateCryptoPricingDto.target_exchange
        crypto_pricing.price_parameter = updateCryptoPricingDto.price_parameter
        crypto_pricing.price_url = updateCryptoPricingDto.price_url
        crypto_pricing.base_crypto = updateCryptoPricingDto.base_crypto
        const saved_crypto_pricing = this.save(crypto_pricing)
        return saved_crypto_pricing
    }
}