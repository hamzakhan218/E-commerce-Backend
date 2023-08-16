/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ProductRepository } from "./products.repository";
import { Product } from "./schemas/create-product.schema";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductsService {
	constructor(private readonly productRepository: ProductRepository) {}

	async getProducts(): Promise<Product[] | []> {
		return await this.productRepository.getAllProducts();
	}

	async getProduct(id: string): Promise<Product | undefined> {
		return await this.productRepository.getProduct(id);
	}

	async createProduct(
		createProductDto: CreateProductDto
	): Promise<Product | undefined> {
		return this.productRepository.createProduct(createProductDto);
	}

	async deleteProduct(id: string): Promise<Product | undefined> {
		return await this.productRepository.deleteProduct(id);
	}

	async getProductsOfUser(email: string): Promise<Product[] | []> {
		return await this.productRepository.getProductsOfUser(email);
	}
}
