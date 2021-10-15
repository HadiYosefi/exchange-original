import { ApiProperty } from "@nestjs/swagger"

export class CreateCryptoDto{
    @ApiProperty()
    name:string
    @ApiProperty()
    slug:string
    @ApiProperty()
    symbol:string
    @ApiProperty()
    icon:string
    @ApiProperty()
    price:number

}