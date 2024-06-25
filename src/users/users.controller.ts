import { Body, Controller, Get, HttpStatus, Post, UseGuards, UsePipes } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles-guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { AddRoleDto } from './dto/add-role-dto';
import { BanUserDto } from './dto/ban-user.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){} 

    @ApiOperation({summary: 'User Creation'})
    @ApiResponse({status:HttpStatus.OK, type: User})
    @UsePipes(ValidationPipe)
    @Post() 

    create(@Body() userDto: CreateUserDto){
            return this.userService.createUser(userDto);
    }

    @ApiOperation({summary: 'Get All Users'})
    @ApiResponse({status:HttpStatus.OK, type: [User]})

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get() 
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @ApiOperation({summary: 'Give out the role'})
    @ApiResponse({status:HttpStatus.OK})

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post("/role") 
    addRole(@Body() dto: AddRoleDto) {
        return this.userService.addRole(dto);
    }

    @ApiOperation({summary: 'Ban user'})
    @ApiResponse({status:HttpStatus.OK})

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post("/ban") 
    ban(@Body() dto: BanUserDto) {
        return this.userService.ban(dto);
    }
}
