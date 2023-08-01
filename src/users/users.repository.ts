import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import { FilterQuery, Model } from "mongoose";

@Injectable()
export class UserRepository {
	// eslint-disable-next-line prettier/prettier
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async getUserById(id: string): Promise<User | undefined> {
		try {
			const users = await this.userModel.findById(id);
			return users;
		} catch (error) {
			return undefined;
		}
	}
	async find(userFilterQuery: FilterQuery<User>): Promise<User[] | []> {
		return await this.userModel.find(userFilterQuery);
	}

	async create(user: User): Promise<User | undefined> {
		const newUser = new this.userModel(user);
		return await newUser.save();
	}

	async deleteUser(id: string): Promise<User | undefined> {
		return await this.userModel.findByIdAndDelete(id);
	}
	async findOneAndUpdate(
		userFilterQuery: FilterQuery<User>,
		user: Partial<User>
	): Promise<User | undefined> {
		return await this.userModel.findOneAndUpdate(userFilterQuery, user);
	}
	async findUserByEmail(email: string): Promise<User | undefined> {
		return await this.userModel.findOne({ email });
	}
}
