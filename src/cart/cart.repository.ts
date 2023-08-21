import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cart, CartDocument } from "./schemas/create-cart.schema";
import { CreateCartDto } from "./dto/create-cart.dto";

@Injectable()
export class CartRepository {
	constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) {}

	async getCart(): Promise<Cart[] | []> {
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
					collection: "carts",
				}),
			});
			const data = await res.json();

			return data;
			// const cart = await this.cartModel.find();
			// return cart;
		} catch (error) {
			return [];
		}
	}

	async findCart(id: string): Promise<Cart | undefined> {
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
					collection: "carts",
					filter: { _id: { $oid: id } },
				}),
			});
			const data = await res.json();

			return data;
			// const cart = await this.cartModel.findById(id);
			// return cart;
		} catch (error) {
			return undefined;
		}
	}

	async findCartByOwnerEmail(email: string): Promise<Cart | undefined> {
		try {
			const res = await fetch(`${process.env.MONGODB_API}/findOne`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					apiKey: process.env.MONGODB_API_KEY,
				},
				body: JSON.stringify({
					dataSource: "Cluster0",
					database: "E-commerce",
					collection: "carts",
					filter: {
						ownerEmail: email,
					},
				}),
			});
			const cart = await res.json();

			return cart;
			// const cart = await this.cartModel.findOne({ ownerEmail: email });
			// return cart;
		} catch (error) {
			return undefined;
		}
	}

	async createCart(createCartDto: CreateCartDto): Promise<Cart | undefined> {
		try {
			const res = await fetch(`${process.env.MONGODB_API}/insertOne`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					apiKey: process.env.MONGODB_API_KEY,
				},
				body: JSON.stringify({
					dataSource: "Cluster0",
					database: "E-commerce",
					collection: "carts",
					document: createCartDto,
				}),
			});
			const data = await res.json();

			return data;
			// const newCart = new this.cartModel(createCartDto);
			// return await newCart.save();
		} catch (error) {}
	}

	async updateCart(
		id: string,
		createCartDto: CreateCartDto
	): Promise<Cart | undefined> {
		const res = await fetch(`${process.env.MONGODB_API}/updateOne`, {
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
				update: createCartDto,
			}),
		});
		const data = await res.json();

		return data;
		// return await this.cartModel.findByIdAndUpdate(id, createCartDto);
	}
}
