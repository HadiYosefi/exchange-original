import { ApiProperty } from "@nestjs/swagger"

export class AssignBlockchainToCryptoDto{
    @ApiProperty()
    blockchain_id:string
    @ApiProperty()
    crypto_id:string
}