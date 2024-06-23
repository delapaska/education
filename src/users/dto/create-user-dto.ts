import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({example:'qwerty123@mail.ru', description: 'User email'})
    readonly email: string; 

    @ApiProperty({example:'102031501112', description: 'User password'})
    readonly password: string;
}