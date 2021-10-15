import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { AssignCryptoToCryptoAppearanceDto } from "../dto/assign-crypto-to-crypto-appearance.dto";
import { AssignCryptoToCryptoLimitDto } from "../dto/assign-crypto-to-crypto-limit.dto";
import { AssignCryptoToCryptoPricingDto } from "../dto/assign-crypto-to-crypto-pricing.dto";
import { CreateCryptoAppearanceDto } from "../dto/create.crypto.appearance.dto";
import { CreateCryptoDto } from "../dto/create.crypto.dto";
import { CreateCryptoLimitDto } from "../dto/create.crypto.limit.dto";
import { CreateCryptoPricingDto } from "../dto/create.crypto.pricing.dto";
import { CryptoService } from "../services/crypto.service";

@Controller('crypto')
export class CryptoController{

    constructor(private cryptoService:CryptoService)
    {}

    @Post('create')
    async createCrypto(@Body() createCryptoDto:CreateCryptoDto):Promise<any>
    {
        return await this.cryptoService.createCrypto(createCryptoDto)
    }

    @Get('getall')
    async getAllCrypto():Promise<any>
    {
        return await this.cryptoService.getAllCrypto()
    }

    @Post('create/appearance')
    async createCryptoAppearance(@Body() createCryptoAppearanceDto:CreateCryptoAppearanceDto):Promise<any>
    {
        return await this.cryptoService.CreateCryptoAppearance(createCryptoAppearanceDto)
    }

    @Post('create/limit')
    async createCryptoLimit(@Body() createCryptoLimitDto:CreateCryptoLimitDto):Promise<any>
    {
        return await this.cryptoService.createCryptoLimit(createCryptoLimitDto)
    }

    @Post('create/pricing')
    async createCryptoPricing(@Body() createCryptoPricingDto:CreateCryptoPricingDto):Promise<any>
    {
        return await this.cryptoService.createCryptoPricing(createCryptoPricingDto)
    }

    @Post('assign/to/pricing')
    async assignCryptoToCryptoPricing(@Body() assignCryptoToCryptoPricingDto:AssignCryptoToCryptoPricingDto):Promise<any>
    {   
        return await this.cryptoService.assignCryptoToCryptoPricing(assignCryptoToCryptoPricingDto)
    }


    @Post('assign/to/appearance')
    async assignCryptoToCryptoAppearance(@Body() assignCryptoToCryptoAppearanceDto:AssignCryptoToCryptoAppearanceDto):Promise<any>
    {
        return await this.cryptoService.assignCryptoToCryptoAppearance(assignCryptoToCryptoAppearanceDto)
    }


    @Post('assign/to/limit')
    async assignCryptoToCryptoLimit(@Body() assignCryptoToCryptoLimitDto:AssignCryptoToCryptoLimitDto):Promise<any>
    {
        return await this.cryptoService.assignCryptoToCryptoLimit(assignCryptoToCryptoLimitDto)
    }

    @Delete('delete/:id')
    async deleteCrypto(@Param('id') id:string):Promise<any>
    {
        return await this.cryptoService.deleteCrypto(id)
    }
}