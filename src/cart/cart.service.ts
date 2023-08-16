import { Injectable } from "@nestjs/common";
import { CartRepository } from "./cart.repository";

@Injectable()
export class CartService {
	constructor(private readonly cartRepository: CartRepository) {}

	async getCart() {
		return await this.cartRepository.getCart();
	}
}
