import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){} 

    @ApiOperation({summary: 'User Creation'})
    @ApiResponse({status:HttpStatus.OK, type: User})
    @Post() 
    create(@Body() userDto: CreateUserDto){
            return this.userService.createUser(userDto);
    }

    @ApiOperation({summary: 'Get All Users'})
    @ApiResponse({status:HttpStatus.OK, type: [User]})
    @Get() 
    getAllUsers() {
        return this.userService.getAllUsers();
    }
}
