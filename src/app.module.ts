import { Module } from "@nestjs/common";
import { UsersModule } from "./modules/users/users.module.ts";

@Module({ imports: [UsersModule], providers: [], controllers: [] })
export class AppModule {}
