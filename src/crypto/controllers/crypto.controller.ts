import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AssignCryptoToCryptoAppearanceDto } from "../dto/assign/assign-crypto-to-crypto-appearance.dto";
import { AssignCryptoToCryptoLimitDto } from "../dto/assign/assign-crypto-to-crypto-limit.dto";
import { AssignCryptoToCryptoPricingDto } from "../dto/assign/assign-crypto-to-crypto-pricing.dto";
import { CreateCryptoAppearanceDto } from "../dto/create/create.crypto.appearance.dto";
import { CreateCryptoDto } from "../dto/create/create.crypto.dto";
import { CreateCryptoLimitDto } from "../dto/create/create.crypto.limit.dto";
import { CreateCryptoPricingDto } from "../dto/create/create.crypto.pricing.dto";
import { UpdateCryptoLimitDto } from "../dto/update/update-crypto-limit.dto";
import { UpdateCryptoAppearanceDto } from "../dto/update/update-crypto-appearance.dto";
import { UpdateCryptoDto } from "../dto/update/update-crypto.dto";
import { CryptoLimit } from "../models/crypto-limit.entity";
import { CryptoService } from "../services/crypto.service";
import { UpdateCryptoPricingDto } from "../dto/update/update-crypto-pricing.dto";
@ApiTags('Crypto')
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

    @Get('findone/:param')
    async findByNameOrSymbol(@Param('param') param:string):Promise<any>
    {
        return await this.cryptoService.findByNameOrSymbol(param)
    }

    @Patch('update/:id')
    async updateCrypto(@Param('id') crypto_id:string, @Body() updateCryptoDto:UpdateCryptoDto):Promise<any>
    {
        return await this.cryptoService.updateCrypto(crypto_id,updateCryptoDto)
    }

    @Patch('update/appearance/:id')
    async updateCryptoAppearance(@Param('id') crypto_appearance_id:string, @Body() updateCryptoAppearanceDto:UpdateCryptoAppearanceDto ):Promise<any>
    {
        return await this.cryptoService.updateCryptoAppearance(crypto_appearance_id,updateCryptoAppearanceDto)
    }

    @Patch('update/limit/:id')
    async updateCryptoLimit(@Param('id') crypto_limit_id:string,@Body() updateCryptoLimitDto:UpdateCryptoLimitDto):Promise<any>
    {
        return await this.cryptoService.updateCryptoLimit(crypto_limit_id,updateCryptoLimitDto)
    }

    @Patch('update/pricing/:id')
    async updateCryptoPricing(@Param('id') crypto_pricing_id:string,@Body() updateCryptoPricingDto:UpdateCryptoPricingDto):Promise<any>
    {
        return this.cryptoService.updateCryptoPricing(crypto_pricing_id,updateCryptoPricingDto)
    }

    
}