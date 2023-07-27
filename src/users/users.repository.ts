import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import { FilterQuery, Model } from "mongoose";

@Injectable()
export class UserRepository {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async getUserById(id: string): Promise<User> {
		return await this.userModel.findById(id);
	}
	async find(userFilterQuery: FilterQuery<User>): Promise<User[]> {
		return await this.userModel.find(userFilterQuery);
	}

	async create(user: User): Promise<User> {
		const newUser = new this.userModel(user);
		return await newUser.save();
	}

	async deleteUser(id: string): Promise<User> {
		return await this.userModel.findByIdAndDelete(id);
	}
	async findOneAndUpdate(
		userFilterQuery: FilterQuery<User>,
		user: Partial<User>
	): Promise<User> {
		return await this.userModel.findOneAndUpdate(userFilterQuery, user);
	}
}
