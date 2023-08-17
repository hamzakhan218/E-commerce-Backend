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
			const cart = await this.cartModel.find();
			return cart;
		} catch (error) {
			return [];
		}
	}

	async findCart(id: string): Promise<Cart | undefined> {
		try {
			const cart = await this.cartModel.findById(id);
			return cart;
		} catch (error) {
			return undefined;
		}
	}

	async findCartByOwnerEmail(email: string): Promise<Cart | undefined> {
		try {
			const cart = await this.cartModel.findOne({ ownerEmail: email });
			return cart;
		} catch (error) {
			return undefined;
		}
	}

	async createCart(createCartDto: CreateCartDto): Promise<Cart | undefined> {
		try {
			const newCart = new this.cartModel(createCartDto);
			return await newCart.save();
		} catch (error) {}
	}

	async updateCart(
		id: string,
		createCartDto: CreateCartDto
	): Promise<Cart | undefined> {
		return await this.cartModel.findByIdAndUpdate(id, createCartDto);
	}
}
