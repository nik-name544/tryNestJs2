import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entitiy';
export declare class UsersService {
    private users;
    getAllUsers(query?: string): User[];
    getUserById(id: number): User;
    createUser(userDto: CreateUserDto): User;
}
