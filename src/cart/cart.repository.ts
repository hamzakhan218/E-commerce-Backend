import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cart, CartDocument } from "./schemas/create-cart.schema";

@Injectable()
export class CartRepository {
	constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) {}

	async getCart() {
		try {
			const cart = await this.cartModel.find();
			return cart;
		} catch (error) {
			return [];
		}
	}
}
