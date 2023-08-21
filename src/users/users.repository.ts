import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schemas/user.schema";
import { FilterQuery, Model } from "mongoose";

@Injectable()
export class UserRepository {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

	async getUserById(id: string): Promise<User | undefined> {
		try {
			const res = await fetch(`${process.env.MONGODB_API}/find`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					apiKey: process.env.MONGODB_API_KEY,
				},
				body: JSON.stringify({
					dataSource: "Cluster0",
					database: "E-commerce",
					collection: "users",
					filter: { _id: { $oid: id } },
				}),
			});
			const data = await res.json();

			return data;
			// const users = await this.userModel.findById(id);
			// return users;
		} catch (error) {
			return undefined;
		}
	}

	async find(): Promise<{ documents: User[] | [] }> {
		const res = await fetch(`${process.env.MONGODB_API}/find`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				apiKey: process.env.MONGODB_API_KEY,
			},
			body: JSON.stringify({
				dataSource: "Cluster0",
				database: "E-commerce",
				collection: "users",
			}),
		});
		const data = await res.json();
		return data;
		// return await this.userModel.find();
	}

	async create(user: User): Promise<{ insertedId: string } | string> {
		const res = await fetch(`${process.env.MONGODB_API}/insertOne`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				apiKey: process.env.MONGODB_API_KEY,
			},
			body: JSON.stringify({
				dataSource: "Cluster0",
				database: "E-commerce",
				collection: "users",
				document: user,
			}),
		});
		const data = await res.json();

		return data;
		// const newUser = new this.userModel(user);
		// return await newUser.save();
	}

	async deleteUser(id: string): Promise<{ deletedCount: number }> {
		const res = await fetch(`${process.env.MONGODB_API}/deleteOne`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				apiKey: process.env.MONGODB_API_KEY,
			},
			body: JSON.stringify({
				dataSource: "Cluster0",
				database: "E-commerce",
				collection: "users",
				filter: { _id: { $oid: id } },
			}),
		});
		const data = await res.json();
		return data;
		// return await this.userModel.findByIdAndDelete(id);
	}

	async findOneAndUpdate(
		userFilterQuery: FilterQuery<User>,
		user: Partial<User>
	): Promise<User | undefined> {
		return await this.userModel.findOneAndUpdate(userFilterQuery, user);
	}

	async findUserByEmail(email: string): Promise<{ documents: [User] | [] }> {
		const res = await fetch(`${process.env.MONGODB_API}/find`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				apiKey: process.env.MONGODB_API_KEY,
			},
			body: JSON.stringify({
				dataSource: "Cluster0",
				database: "E-commerce",
				collection: "users",
				filter: {
					email,
				},
			}),
		});
		const data = await res.json();
		return data;
		// return await this.userModel.findOne({ email });
	}
}
