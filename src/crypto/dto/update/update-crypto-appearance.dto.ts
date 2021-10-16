import { ApiProperty } from "@nestjs/swagger"

export class UpdateCryptoAppearanceDto{
    @ApiProperty()
    text_color:string

    @ApiProperty()
primary_color:string

@ApiProperty()
secondary_color:string

@ApiProperty()
alternative_color:string
}