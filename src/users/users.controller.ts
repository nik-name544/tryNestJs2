import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entitiy';
import { ApiQuery } from '@nestjs/swagger'


@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @ApiQuery({ name: "name", required: false })
    @Get('/all')
    getAllUsers(@Query('name') query?: string): User[] {
        return this.userService.getAllUsers(query)
    }

    @Get(':id')
    getUserById(@Param('id') id: string): User {
        return this.userService.getUserById(+id)
    }

    @Post('/create')
    createUser(@Body() userDto: CreateUserDto): User {
        return this.userService.createUser(userDto)
    }

}
