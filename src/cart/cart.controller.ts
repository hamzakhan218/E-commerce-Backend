import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CartService } from "./cart.service";
import { CreateCartDto } from "./dto/create-cart.dto";
import { Cart } from "./schemas/create-cart.schema";

@Controller("cart")
export class CartController {
	constructor(private readonly cartServices: CartService) {}

	@Get()
	async getCarts(): Promise<Cart[] | []> {
		return await this.cartServices.getCarts();
	}

	@Get("email/:email")
	async findCartByOwnerEmail(
		@Param("email") email: string
	): Promise<Cart | undefined> {
		return await this.cartServices.findCartByOwnerEmail(email);
	}

	@Get(":id")
	async getCart(@Param("id") id: string): Promise<Cart | undefined> {
		return await this.cartServices.getCart(id);
	}

	@Post()
	async createCart(
		@Body() createCartDto: CreateCartDto
	): Promise<Cart | undefined> {
		return await this.cartServices.createCart(createCartDto);
	}

	@Put(":id")
	async updateCart(
		@Body() createCartDto: CreateCartDto,
		@Param("id") id: string
	): Promise<Cart | undefined> {
		return await this.cartServices.updateCart(id, createCartDto);
	}
}
