import { ApiProperty } from "@nestjs/swagger"

export class AssignCryptoToCryptoLimitDto{
    @ApiProperty()
    crypto_id:string
    @ApiProperty()
    crypto_limit_id:string
}