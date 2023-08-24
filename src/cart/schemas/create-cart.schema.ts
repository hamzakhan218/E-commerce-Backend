/* eslint-disable indent */
// import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { CreateProductDto } from "../../products/dto/create-product.dto";

// export type CartDocument = Cart & Document;

// @Schema()
export type Cart = {
	// @Prop()
	id: string;

	// @Prop()
	ownerEmail: string;

	// @Prop()
	items: {
		product: CreateProductDto;
		quantity: number;
	}[];
};

// export const cartSchema = SchemaFactory.createForClass(Cart);
