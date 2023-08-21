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

	async getAllProducts(): Promise<Product[] | []> {
		try {
			const res = await fetch(`${process.env.MONGODB_API}/find`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					apiKey: process.env.MONGODB_API_KEY,
				},
				body: JSON.stringify({
					dataSource: "Cluster0",
					database: "E-commerce",
					collection: "products",
				}),
			});
			const data = await res.json();

			return data;
			// const products = await this.productModel.find();
			// return products;
		} catch (error) {
			return [];
		}
	}

	async getProduct(id: string): Promise<Product | undefined> {
		try {
			const res = await fetch(`${process.env.MONGODB_API}/find`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					apiKey: process.env.MONGODB_API_KEY,
				},
				body: JSON.stringify({
					dataSource: "Cluster0",
					database: "E-commerce",
					collection: "products",
					filter: { _id: { $oid: id } },
				}),
			});
			const data = await res.json();

			return data;
			// const product = await this.productModel.findById(id);
			// return product;
		} catch (error) {
			return undefined;
		}
	}

	async createProduct(
		createProductDto: CreateProductDto
	): Promise<Product | undefined> {
		const res = await fetch(`${process.env.MONGODB_API}/insertOne`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				apiKey: process.env.MONGODB_API_KEY,
			},
			body: JSON.stringify({
				dataSource: "Cluster0",
				database: "E-commerce",
				collection: "products",
				document: createProductDto,
			}),
		});
		const data = await res.json();

		return data;
		// const newProduct = new this.productModel(createProductDto);
		// return await newProduct.save();
	}

	async deleteProduct(id: string): Promise<Product | undefined> {
		try {
			const res = await fetch(`${process.env.MONGODB_API}/deleteOne`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					apiKey: process.env.MONGODB_API_KEY,
				},
				body: JSON.stringify({
					dataSource: "Cluster0",
					database: "E-commerce",
					collection: "products",
					filter: { _id: { $oid: id } },
				}),
			});
			const data = await res.json();

			return data;
			// const product = this.productModel.findByIdAndDelete(id);
			// return product;
		} catch (error) {
			return undefined;
		}
	}

	async getProductsOfUser(email: string): Promise<Product[] | []> {
		try {
			const res = await fetch(`${process.env.MONGODB_API}/find`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					apiKey: process.env.MONGODB_API_KEY,
				},
				body: JSON.stringify({
					dataSource: "Cluster0",
					database: "E-commerce",
					collection: "products",
					filter: {
						ownerEmail: email,
					},
				}),
			});
			const data = await res.json();

			return data;
			// const products: Product[] = await this.productModel.find({
			// 	ownerEmail: email,
			// });
			// return products;
		} catch (error) {
			return [];
		}
	}
}
