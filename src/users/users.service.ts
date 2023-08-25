import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserRepository } from "./users.repository";
import { User } from "./schemas/user.schema";
import { v4 as uuidv4 } from "uuid";
import * as argon2 from "argon2";

@Injectable()
export class UsersService {
	constructor(private readonly userRepository: UserRepository) {}

	async getUserById(userId: string): Promise<User | undefined> {
		return await this.userRepository.getUserById(userId);
	}

	async getUsers(): Promise<{ documents: User[] | [] }> {
		return await this.userRepository.find();
	}

	async createUser(createUserDto: CreateUserDto) {
		const doesUserExists: { documents: [User] | [] } =
			await this.userRepository.findUserByEmail(createUserDto.email);

		if (doesUserExists.documents.length >= 1) {
			return {
				insertedId: undefined,
			};
		} else {
			return await this.userRepository.create({
				id: uuidv4(),
				...createUserDto,
				password: await argon2.hash(createUserDto.password),
			});
		}
	}

	async deleteUser(id: string): Promise<{ deletedCount: number }> {
		return this.userRepository.deleteUser(id);
	}

	async getUserByEmail(email: string): Promise<{ documents: [User] | [] }> {
		return await this.userRepository.findUserByEmail(email);
	}
}
