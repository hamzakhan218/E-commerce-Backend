import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserRepository } from "./users.repository";
import { User } from "./schemas/user.schema";
import { v4 as uuidv4 } from "uuid";
import * as argon2 from "argon2";
@Injectable()
export class UsersService {
	constructor(private readonly userRepository: UserRepository) {}

	async getUserById(userId: string): Promise<User> {
		return await this.userRepository.getUserById(userId);
	}

	async getUsers(): Promise<User[]> {
		return await this.userRepository.find({});
	}

	async createUser(createUserDto: CreateUserDto): Promise<User> {
		return await this.userRepository.create({
			id: uuidv4(),
			...createUserDto,
			password: await argon2.hash(createUserDto.password),
		});
	}

	async deleteUser(id: string): Promise<User> {
		return this.userRepository.deleteUser(id);
	}
}
