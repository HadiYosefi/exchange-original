import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AssignArchToBlockchainDto } from "../dto/assign/assign-arch-to-blockchain.dto";
import { CreateArchDto } from "../dto/create/create.arch.dto";
import { Arch } from "../models/arch.entity";
import { ArchService } from "../services/arch.service";
@ApiTags('Arch')
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

    @Get('findone/:param')
    async findWithName(@Param('param') Param:string):Promise<any>
    {
        return await this.archService.findWithName(Param)
    }

    @Patch('updateName/:id')
    async updateName(@Param('id') archId:string,@Body() updateArchDto:CreateArchDto):Promise<any>{
        return await this.archService.updateArchName(archId,updateArchDto)
    }

    
}