import { ApiProperty } from "@nestjs/swagger"

export class UpdateCryptoLimitDto{
    @ApiProperty()
    min_withdraw:number

    @ApiProperty()
min_deposit:number

@ApiProperty()
min_buy:number

@ApiProperty()
max_buy:number

@ApiProperty()
min_sell:number

@ApiProperty()
max_sell:number
}