import { ApiProperty } from "@nestjs/swagger"
import { PricingType } from "src/crypto/models/enum/price.type.enum"

export class UpdateCryptoDto{
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

@ApiProperty()
pricing_type:PricingType
@ApiProperty()

is_default:boolean
@ApiProperty()

is_desabled:boolean

@ApiProperty()
is_invest:boolean

@ApiProperty()
is_gateway:boolean

@ApiProperty()
is_withdrawable:boolean

@ApiProperty()
is_depositable:boolean
}