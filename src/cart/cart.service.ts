import { Injectable } from "@nestjs/common";
import { CartRepository } from "./cart.repository";
import { CreateCartDto } from "./dto/create-cart.dto";
import { Cart } from "./schemas/create-cart.schema";

@Injectable()
export class CartService {
	constructor(private readonly cartRepository: CartRepository) {}

	async getCarts(): Promise<Cart[] | []> {
		return await this.cartRepository.getCart();
	}

	async findCartByOwnerEmail(email: string): Promise<Cart | undefined> {
		return await this.cartRepository.findCartByOwnerEmail(email);
	}

	async getCart(id: string): Promise<Cart | undefined> {
		return await this.cartRepository.findCart(id);
	}

	async createCart(createCartDto: CreateCartDto): Promise<Cart | undefined> {
		return await this.cartRepository.createCart(createCartDto);
	}

	async updateCart(
		id: string,
		createCartDto: CreateCartDto
	): Promise<Cart | undefined> {
		return await this.cartRepository.updateCart(id, createCartDto);
	}
}
