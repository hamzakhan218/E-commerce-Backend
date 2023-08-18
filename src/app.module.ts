import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { ProductsModule } from "./products/products.module";
import { CartModule } from "./cart/cart.module";

@Module({
	imports: [
		MongooseModule.forRoot(
			"mongodb+srv://hamzabashir218:swZyAi2riwSfhYeh@cluster0.ap916by.mongodb.net/?retryWrites=true&w=majority"
			// "mongodb://localhost:27017/Ecommerce"
		),
		UsersModule,
		AuthModule,
		ProductsModule,
		CartModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
