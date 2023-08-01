import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}
	@HttpCode(HttpStatus.OK)
	@Post("login")
	signIn(@Body() signInDto: { email: string; password: string }) {
		return this.authService.signIn(signInDto.email, signInDto.password);
	}
}
