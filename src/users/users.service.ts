import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entitiy';

@Injectable()
export class UsersService {
    private users: User[] = [{ id: 0, name: "name" }, { id: 1, name: "nik" }, { id: 2, name: "name" }]

    getAllUsers(query?: string): User[] {
        const allUsers = this.users
        if (query) {
            return this.users.filter(user => user.name === query)
        }

        return allUsers
    }

    getUserById(id: number): User {
        const user = this.users.find(user => user.id === id)

        return user
    }

    createUser(userDto: CreateUserDto): User {
        const newUser = { id: Date.now(), ...userDto }

        this.users.push(newUser)

        return newUser
    }

}
