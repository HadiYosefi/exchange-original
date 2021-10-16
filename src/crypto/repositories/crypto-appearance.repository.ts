import { Injectable, NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateCryptoAppearanceDto } from "../dto/create/create.crypto.appearance.dto";
import { UpdateCryptoAppearanceDto } from "../dto/update/update-crypto-appearance.dto";
import { CryptoAppearance } from "../models/crypto-appearance.entity";
@Injectable()
@EntityRepository(CryptoAppearance)
export class CryptoAppearanceRepository extends Repository<CryptoAppearance>{

    
    async createCryptoAppearance(createCryptoAppearanceDto:CreateCryptoAppearanceDto):Promise<CryptoAppearance>
    {
        const cryptoAppearance=new CryptoAppearance()
        cryptoAppearance.text_color=createCryptoAppearanceDto.text_color
        cryptoAppearance.secondary_color=createCryptoAppearanceDto.secondary_color
        cryptoAppearance.primary_color=createCryptoAppearanceDto.primary_color
        cryptoAppearance.alternative_color=createCryptoAppearanceDto.alternative_color
        const saved_appearance=this.save(cryptoAppearance)
        return saved_appearance
    }
    
    async updateCryptoAppearance(crypto_appearance_id:string,updateCryptoAppearanceDto:UpdateCryptoAppearanceDto):Promise<CryptoAppearance>
    {
        const crypto_appearance=await this.findOne({where:{id:crypto_appearance_id}})
        if(!crypto_appearance)
        throw new NotFoundException('there is no crypto_appearance')
        crypto_appearance.text_color=updateCryptoAppearanceDto.text_color
        crypto_appearance.alternative_color=updateCryptoAppearanceDto.alternative_color
        crypto_appearance.primary_color=updateCryptoAppearanceDto.primary_color
        crypto_appearance.secondary_color=updateCryptoAppearanceDto.secondary_color
        const saved_crypto_appearance=this.save(crypto_appearance)
        return saved_crypto_appearance
    }
}