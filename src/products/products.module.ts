import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
// import { MongooseModule } from "@nestjs/mongoose";
// import { Product, productSchema } from "./schemas/create-product.schema";
import { ProductRepository } from "./products.repository";

@Module({
	// imports: [
	// 	MongooseModule.forFeature([
	// 		{
	// 			name: Product.name,
	// 			schema: productSchema,
	// 		},
	// 	]),
	// ],
	controllers: [ProductsController],
	providers: [ProductsService, ProductRepository],
})
export class ProductsModule {}
