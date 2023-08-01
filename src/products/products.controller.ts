import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./schemas/create-product.schema";
import { CreateProductDto } from "./dto/create-product.dto";

@Controller("products")
export class ProductsController {
	constructor(private readonly productService: ProductsService) {}

	@Get()
	async getProducts(): Promise<Product[] | []> {
		return await this.productService.getProducts();
	}

	@Get(":id")
	async getProduct(@Param("id") id: string): Promise<Product | undefined> {
		return await this.productService.getProduct(id);
	}

	@Post()
	async createProduct(
		@Body() createProductDto: CreateProductDto
	): Promise<Product> {
		return await this.productService.createProduct(createProductDto);
	}

	@Delete(":id")
	async deleteProduct(@Param("id") id: string): Promise<Product | undefined> {
		return await this.productService.deleteProduct(id);
	}
}
