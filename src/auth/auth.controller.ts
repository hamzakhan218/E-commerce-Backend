import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SigninDto } from "./auth.dto";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@HttpCode(HttpStatus.OK)
	@Post("login")
	signIn(@Body() signInDto: SigninDto) {
		return this.authService.signIn(signInDto.email, signInDto.password);
	}
}
