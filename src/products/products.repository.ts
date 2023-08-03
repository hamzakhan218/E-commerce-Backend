import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product, ProductDocument } from "./schemas/create-product.schema";
import { Model } from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductRepository {
	constructor(
		@InjectModel(Product.name) private productModel: Model<ProductDocument>
	) {}

	async getAllProducts(): Promise<Product[] | undefined> {
		try {
			const products = await this.productModel.find();
			return products;
		} catch (error) {
			return undefined;
		}
	}

	async getProduct(id: string): Promise<Product | undefined> {
		try {
			const product = await this.productModel.findById(id);
			return product;
		} catch (error) {
			return undefined;
		}
	}

	async createProduct(
		createProductDto: CreateProductDto
	): Promise<Product | undefined> {
		const newProduct = new this.productModel(createProductDto);
		return await newProduct.save();
	}

	async deleteProduct(id: string): Promise<Product | undefined> {
		try {
			const product = this.productModel.findByIdAndDelete(id);
			return product;
		} catch (error) {
			return undefined;
		}
	}
}
