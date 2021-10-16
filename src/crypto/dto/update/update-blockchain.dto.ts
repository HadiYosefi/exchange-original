import { ApiProperty } from "@nestjs/swagger"

export class UpdateBlockchainDto{
    @ApiProperty()
    name:string
    @ApiProperty()
    symbol:string
    @ApiProperty()
    icon:string
}