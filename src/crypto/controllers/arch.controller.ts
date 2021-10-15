import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { AssignArchToBlockchainDto } from "../dto/assign-arch-to-blockchain.dto";
import { CreateArchDto } from "../dto/create.arch.dto";
import { ArchService } from "../services/arch.service";

@Controller('arch')
export class ArchController{
    constructor (private archService:ArchService)
    {

    }

    @Post('create')
    async createArch(@Body() createArchDto:CreateArchDto):Promise<any>
    {
        return await this.archService.createArch(createArchDto)
    }


    @Get('getall')
    async getAll():Promise<any>
    {
        return this.archService.getAllArch()
    }

    @Delete('delete/:id')
    async deleteArch(@Param('id') id:string):Promise<any>
    {
        return this.archService.deleteArch(id)
    }

    @Post('assign/to/blockchain')
    async assignArchToBlockhain(@Body() assignArchToBlockchainDto:AssignArchToBlockchainDto):Promise<any>
    {
        return await this.archService.assignArchToBlockchain(assignArchToBlockchainDto)
    }
}