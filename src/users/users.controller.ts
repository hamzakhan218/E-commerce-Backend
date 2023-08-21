import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./schemas/user.schema";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	async getUsers(): Promise<{ documents: User[] | [] }> {
		return this.usersService.getUsers();
	}

	@Post()
	async createUser(@Body() createUserDto: CreateUserDto) {
		return await this.usersService.createUser(createUserDto);
	}

	@Get(":id")
	async getUserById(@Param("id") id: string): Promise<User | undefined> {
		return this.usersService.getUserById(id);
	}

	@Get("/email/:email")
	async getUserByEmail(
		@Param("email") email: string
	): Promise<{ documents: [User] | [] }> {
		return this.usersService.getUserByEmail(email);
	}

	@Delete(":id")
	async deleteUser(@Param("id") id: string): Promise<{ deletedCount: number }> {
		return this.usersService.deleteUser(id);
	}
}
