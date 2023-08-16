/* eslint-disable indent */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { productType } from "../dto/create-product.dto";

export type ProductDocument = Product & Document;

@Schema()
export class Product {
	@Prop()
	id: string;

	@Prop()
	name: string;

	@Prop()
	price: number;

	@Prop()
	image: string;

	@Prop()
	publishDate: Date;

	@Prop()
	ownerEmail: string;

	@Prop()
	description: string;

	@Prop()
	category: string;

	@Prop()
	stock: number;

	@Prop()
	reviews: productType[];
}

export const productSchema = SchemaFactory.createForClass(Product);
