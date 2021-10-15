import { ApiProperty } from "@nestjs/swagger"

export class AssignCryptoToCryptoAppearanceDto{
    @ApiProperty()
    crypto_id:string
    @ApiProperty()
    crypto_appearance_id:string
}