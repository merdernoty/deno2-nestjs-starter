import { UsersController } from "@/modules/users/users.controller.ts";
import { Module } from "@nestjs/common";
import { UsersService } from "@/modules/users/users.service.ts";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
