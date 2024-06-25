import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";
 

export class CreateUserDto{
    @ApiProperty({example:'qwerty123@mail.ru', description: 'User email'})
    @IsString({message: "must be a string"})
    @IsEmail({},{message: "Uncorrect email"})
    readonly email: string; 

  
    @ApiProperty({example:'102031501112', description: 'User password'})
    @IsString({message: "must be a string"})
    @Length(4,16,{message:'The password must contain at least 4x and no more than 16 characters'})
    readonly password: string;
}