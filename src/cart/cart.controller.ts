import { Controller, Get } from "@nestjs/common";
import { CartService } from "./cart.service";

@Controller("cart")
export class CartController {
	constructor(private readonly cartServices: CartService) {}

	@Get()
	async getCart() {
		return await this.cartServices.getCart();
	}
}
