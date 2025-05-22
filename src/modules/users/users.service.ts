import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "@/modules/users/dto/create-user.dto.ts";
import { UpdateUserDto } from "@/modules/users/dto/update-user.dto.ts";

@Injectable()
export class UsersService {
  create(_createUserDto: CreateUserDto) {
    return "This action adds a new user";
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, _updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
