import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
// import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { ProductsModule } from "./products/products.module";
import { CartModule } from "./cart/cart.module";
// import { ConfigModule } from "@nestjs/config";

@Module({
	imports: [
		// ConfigModule.forRoot(),
		// MongooseModule.forRoot(process.env.MONGODB_URL),
		UsersModule,
		AuthModule,
		ProductsModule,
		CartModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
