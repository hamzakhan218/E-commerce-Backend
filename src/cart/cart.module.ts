import { Module } from "@nestjs/common";
import { CartController } from "./cart.controller";
import { CartService } from "./cart.service";
import { CartRepository } from "./cart.repository";
// import { MongooseModule } from "@nestjs/mongoose";
// import { Cart } from "./schemas/create-cart.schema";

@Module({
	// imports: [
	// 	MongooseModule.forFeature([
	// 		{
	// 			name: Cart.name,
	// 			schema: cartSchema,
	// 		},
	// 	]),
	// ],
	controllers: [CartController],
	providers: [CartService, CartRepository],
})
export class CartModule {}
