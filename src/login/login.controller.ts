import { Body, Controller, Post } from "@nestjs/common";
import { LoginService } from "./login.service";

@Controller("login")
export class LoginController {
	constructor(private readonly loginService: LoginService) {}
	@Post()
	async loginUser(@Body() body: { email: string; password: string }) {
		return await this.loginService.loginUser(body);
	}
}
