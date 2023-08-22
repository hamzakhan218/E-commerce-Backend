import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { useContainer } from "class-validator";
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const corsOptions: CorsOptions = {
		origin: "https://e-commerce-frontend-chi-inky.vercel.app", // Replace with your frontend's domain
		methods: ["GET", "POST", "PUT", "DELETE"], // Allow the necessary HTTP methods
		credentials: true, // If your app requires credentials (e.g., cookies)
	};

	app.enableCors(corsOptions);

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			transform: true,
		})
	);
	useContainer(app.select(AppModule), { fallbackOnErrors: true });
	await app.listen(4000);
}
bootstrap();
