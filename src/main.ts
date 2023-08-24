import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { useContainer } from "class-validator";
// import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
// import { Request, Response, NextFunction } from "express";
// import { MiddlewareFunction } from "@nestjs/common/interfaces/middleware/middleware-function.interface";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors();
	// const corsOptions: CorsOptions = {
	// 	origin: `'*'`,
	// 	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	// 	preflightContinue: true,
	// 	optionsSuccessStatus: 204,
	// };

	// app.enableCors(corsOptions);

	// Middleware to handle preflight (OPTIONS) requests
	// const handlePreflight: MiddlewareFunction = (
	// 	req: Request,
	// 	res: Response,
	// 	next: NextFunction
	// ) => {
	// 	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	// 	res.header("Access-Control-Allow-Headers", "Content-Type, Accept");
	// 	next();
	// };

	// app.use(handlePreflight);

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
