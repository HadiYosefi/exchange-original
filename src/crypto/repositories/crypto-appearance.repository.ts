import { Injectable } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateCryptoAppearanceDto } from "../dto/create.crypto.appearance.dto";
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
    
}