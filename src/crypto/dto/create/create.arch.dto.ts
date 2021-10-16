import { ApiProperty } from "@nestjs/swagger";

export class CreateArchDto{
    @ApiProperty()
    name:string
}