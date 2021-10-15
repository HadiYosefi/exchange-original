import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateCryptoPricingDto } from "../dto/create.crypto.pricing.dto";
import { CryptoPricing } from "../models/crypto-pricing.entity";
@Injectable()
@EntityRepository(CryptoPricing)
export class CryptoPricingRepository extends Repository<CryptoPricing>{


    async createCryptoPricing(createCryptoPricingDto:CreateCryptoPricingDto):Promise<CryptoPricing>
    {
        const cryptoPricing=new CryptoPricing()
        cryptoPricing.base_crypto=createCryptoPricingDto.base_crypto
        cryptoPricing.price_parameter=createCryptoPricingDto.price_parameter
        cryptoPricing.price_url=createCryptoPricingDto.price_url
        cryptoPricing.target_exchange=createCryptoPricingDto.target_exchange
        const saved_pricing=this.save(cryptoPricing)
        return saved_pricing
    }
}