import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product, ProductDocument } from "./schemas/create-product.schema";
import { Model } from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductRepository {
	// eslint-disable-next-line prettier/prettier
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
		if (
			createProductDto.name === undefined ||
			createProductDto.image === undefined ||
			createProductDto.price === undefined ||
			createProductDto.publishDate === undefined ||
			createProductDto.OwnerId === undefined ||
			createProductDto.description === undefined ||
			createProductDto.category === undefined ||
			createProductDto.stock === undefined
		) {
			return undefined;
		} else {
			const newProduct = new this.productModel(createProductDto);
			return await newProduct.save();
		}
		return undefined;
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
