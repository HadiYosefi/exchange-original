import { ApiProperty } from "@nestjs/swagger"

export class CreateCryptoPricingDto{
    target_exchange:string
    @ApiProperty()   
    price_url:string
    @ApiProperty()
    price_parameter:string
    @ApiProperty()
    base_crypto:string
}