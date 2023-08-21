import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { useContainer } from "class-validator";

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		cors: true,
	});
	// app.enableCors({
	// 	origin: ["https://betterjavacode.com", "https://www.google.com"],
	// 	methods: ["POST", "PUT", "DELETE", "GET", "OPTIONS"],
	// });
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
