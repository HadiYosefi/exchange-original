import { ApiProperty } from "@nestjs/swagger"

export class AssignArchToBlockchainDto{
    @ApiProperty()
    arch_id:string
    @ApiProperty()
    blockchain_id:string
}