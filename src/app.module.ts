import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./users/users.module";

@Module({
	imports: [
		MongooseModule.forRoot(
			"mongodb+srv://hamzabashir218:swZyAi2riwSfhYeh@cluster0.ap916by.mongodb.net/?retryWrites=true&w=majority"
		),
		UsersModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
