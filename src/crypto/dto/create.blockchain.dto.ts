import { ApiProperty } from "@nestjs/swagger"

export class CreateBlockchainDto{
    @ApiProperty()
    name:string
    @ApiProperty()
    symbol:string
    @ApiProperty()
    icon:string
    @ApiProperty()
    crypto:string
}