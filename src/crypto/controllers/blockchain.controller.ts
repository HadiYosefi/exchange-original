import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { AssignBlockchainToCryptoDto } from "../dto/assign/assign-blockchain-to-crypto.dto";
import { CreateBlockchainDto } from "../dto/create/create.blockchain.dto";
import { Blockchain } from "../models/blockchain.entity";
import { BlockchainService } from "../services/blockchain.service";

@Controller('blockchain')
export class BlockchainController{
    constructor(private blockchainService:BlockchainService)
    {}

    @Post('create')
    async createBlockchain(@Body() createBlockchainDto:CreateBlockchainDto):Promise<any>
    {
        return  await this.blockchainService.createBlockchain(createBlockchainDto)
    }

    @Get('getall')
    async getAllBlockchain():Promise<any>
    {
        
        
        return await this.blockchainService.getAllBlockchain()
    }

    @Delete('delete/:id')
    async deleteBlockchain(@Param('id') id:string):Promise<any>
    {
        return await this.blockchainService.deleteBlockchain(id)
    }

    @Post('assign/to/crypto')
    async assignBlockchainToCrypto(@Body() assignBlockchainToCryptoDto:AssignBlockchainToCryptoDto):Promise<any>
    {
        return await this.blockchainService.assignBlockchainToCrypto(assignBlockchainToCryptoDto)
    }

    @Get('findone/:param')
    async findByNameOrSymbol(@Param('param') param:string):Promise<any>
    {
        return await this.blockchainService.findByNameOrSymbol(param)
    }

    
}