import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entitiy';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAllUsers(query?: string): User[];
    getUserById(id: string): User;
    createUser(userDto: CreateUserDto): User;
}
