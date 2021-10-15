import { ApiProperty } from "@nestjs/swagger"

export class AssignCryptoToCryptoPricingDto{
    @ApiProperty()
crypto_id:string
@ApiProperty()
crypto_pricing_id:string

}