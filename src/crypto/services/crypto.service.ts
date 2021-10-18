import { BadRequestException, ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCryptoDto } from "../dto/create/create.crypto.dto";
import { CryptoRepository } from "../repositories/crypto.repository";
import {Crypto} from '../models/crypto.entity'
import { CreateCryptoAppearanceDto } from "../dto/create/create.crypto.appearance.dto";
import { CryptoAppearanceRepository } from "../repositories/crypto-appearance.repository";
import { CreateCryptoLimitDto } from "../dto/create/create.crypto.limit.dto";
import { CryptoLimitRepository } from "../repositories/crypto-limit.repository";
import { CreateCryptoPricingDto } from "../dto/create/create.crypto.pricing.dto";
import { CryptoPricingRepository } from "../repositories/crypto-pricing.repository";
import { AssignCryptoToCryptoPricingDto } from "../dto/assign/assign-crypto-to-crypto-pricing.dto";
import { AssignCryptoToCryptoAppearanceDto } from "../dto/assign/assign-crypto-to-crypto-appearance.dto";
import { AssignCryptoToCryptoLimitDto } from "../dto/assign/assign-crypto-to-crypto-limit.dto";
import { Like } from "typeorm";
import { UpdateCryptoDto } from "../dto/update/update-crypto.dto";
import { CryptoAppearance } from "../models/crypto-appearance.entity";
import { UpdateCryptoAppearanceDto } from "../dto/update/update-crypto-appearance.dto";
import { UpdateCryptoLimitDto } from "../dto/update/update-crypto-limit.dto";
import { CryptoPricing } from "../models/crypto-pricing.entity";
import { UpdateCryptoPricingDto } from "../dto/update/update-crypto-pricing.dto";
import { CryptoLimit } from "../models/crypto-limit.entity";

@Injectable()
export class CryptoService{

    constructor(
@InjectRepository(CryptoRepository) private cryptoRepository:CryptoRepository,
@InjectRepository(CryptoAppearanceRepository) private cryptoAppearanceRepository:CryptoAppearanceRepository,
@InjectRepository(CryptoLimitRepository) private cryptoLimitRepository:CryptoLimitRepository,
@InjectRepository(CryptoPricingRepository) private cryptoPricingRepository:CryptoPricingRepository
    )
    {}

    async createCrypto(createCryptoDto:CreateCryptoDto):Promise<Crypto>
    {
        return await this.cryptoRepository.createCrypto(createCryptoDto)
    }


    async getAllCrypto():Promise<Crypto[]>
    {
        return this.cryptoRepository.find({where:{deleted:false},relations:['obj_blockchain','obj_crypto_pricing','obj_crypto_appearance','obj_crypto_limit']})
    }


    async CreateCryptoAppearance(createCryptoAppearanceDto:CreateCryptoAppearanceDto):Promise<CryptoAppearance>
    {
        return await this.cryptoAppearanceRepository.createCryptoAppearance(createCryptoAppearanceDto)
    }

    async createCryptoLimit(createCryptoLimitDto:CreateCryptoLimitDto):Promise<CryptoLimit>
    {
        return await this.cryptoLimitRepository.createCryptoLimit(createCryptoLimitDto)
    }

    async createCryptoPricing(createCryptoPricingDto:CreateCryptoPricingDto):Promise<CryptoPricing>
    {
        return await this.cryptoPricingRepository.createCryptoPricing(createCryptoPricingDto)
    }


    async assignCryptoToCryptoPricing(assignCryptoToCryptoPricingDto:AssignCryptoToCryptoPricingDto):Promise<Crypto>
    {
        const crypto=await this.cryptoRepository.findOne({where:{id:assignCryptoToCryptoPricingDto.crypto_id,deleted:false},relations:['obj_crypto_pricing']})
        if(!crypto)
        throw new ConflictException('There is no crypto with this ID...!')
        const crypto_pricing=await this.cryptoPricingRepository.findOne({where:{id:assignCryptoToCryptoPricingDto.crypto_pricing_id}})
        if(!crypto_pricing)
        throw new ConflictException('There is no crypto_pricing with this ID...!')
        if(crypto.obj_crypto_pricing)
        throw new BadRequestException('Crypto Aleardy have pricing')
        crypto.obj_crypto_pricing=crypto_pricing
        const saved_crypto=this.cryptoRepository.save(crypto)
        return saved_crypto
    }

    async assignCryptoToCryptoAppearance(assignCryptoToCryptoAppearanceDto:AssignCryptoToCryptoAppearanceDto):Promise<Crypto>
    {
        const crypto=await this.cryptoRepository.findOne({where:{id:assignCryptoToCryptoAppearanceDto.crypto_id,deleted:false},relations:['obj_crypto_appearance']})
        if(!crypto)
        throw new ConflictException('There is no Crypto for this ID...!')
        const cryptoAppearance=await this.cryptoAppearanceRepository.findOne({where:{id:assignCryptoToCryptoAppearanceDto.crypto_appearance_id}})
        if(!cryptoAppearance)
        throw new ConflictException('There is no appearance for this ID...!')
        if(crypto.obj_crypto_appearance)
        throw new BadRequestException('Crypto Aleardy have appearance...!')
        crypto.obj_crypto_appearance=cryptoAppearance
        const saved_appearance=this.cryptoRepository.save(crypto)
        return saved_appearance
    }


    async assignCryptoToCryptoLimit(assignCryptoToCryptoLimitDto:AssignCryptoToCryptoLimitDto):Promise<Crypto>
    {
        const crypto=await this.cryptoRepository.findOne({where:{id:assignCryptoToCryptoLimitDto.crypto_id,deleted:false},relations:['obj_crypto_limit']})
        if(!crypto)
        throw new ConflictException('There is no crypto for id you sent...!')
        const cryptoLimit=await this.cryptoLimitRepository.findOne({where:{id:assignCryptoToCryptoLimitDto.crypto_limit_id}})
        if(!cryptoLimit)
        throw new ConflictException('There is no limit for id you sent...!')
        if(crypto.obj_crypto_limit)
        throw new BadRequestException('Crypto Aleardy have limit')
        crypto.obj_crypto_limit=cryptoLimit
        const saved_limit=this.cryptoRepository.save(crypto)
        return saved_limit
    }

    async deleteCrypto(id:string):Promise<void>
    {
        const crypto=await this.cryptoRepository.findOne({where:{id:id,deleted:false}})
        if(!crypto)
        throw new BadRequestException('there is no crypto or aleardy deleted')
        crypto.deleted=true
        const saved_crypto=this.cryptoRepository.save(crypto)

    }

    async findByNameOrSymbol(param:string):Promise<Crypto[]>
    {
        const crypto=await this.cryptoRepository.find(
            {where:[{name:Like(`%${param}%`)},
                    {symbol:Like(`%${param.toUpperCase()}%`)}
        
        ]}
        )
        if(!crypto)
        throw new BadRequestException(`There is no crypto for ${param} `)
        return crypto
    }
    async updateCrypto(crypto_id:string,updateCryptoDto:UpdateCryptoDto):Promise<Crypto>
    {
        return await this.cryptoRepository.updateCrypto(crypto_id,updateCryptoDto)
    }

    async updateCryptoAppearance(crypto_appearance_id:string, updateCryptoAppearanceDto:UpdateCryptoAppearanceDto):Promise<CryptoAppearance>
    {
        return await this.cryptoAppearanceRepository.updateCryptoAppearance(crypto_appearance_id,updateCryptoAppearanceDto)
    }

    async updateCryptoLimit(crypto_limit_id:string,updateCryptoLimitDto:UpdateCryptoLimitDto):Promise<any>
    {
        return await this.cryptoLimitRepository.updateCryptoLimit(crypto_limit_id,updateCryptoLimitDto)
    }

    async updateCryptoPricing(crypto_pricing_id:string,updateCryptoPricingDto:UpdateCryptoPricingDto):Promise<CryptoPricing>
    {
        return await this.cryptoPricingRepository.updateCryptoPricing(crypto_pricing_id,updateCryptoPricingDto)
    }
    
}