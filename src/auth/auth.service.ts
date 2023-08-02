import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";
import * as argon2 from "argon2";
import { CreateUserDto } from "src/users/dto/create-user.dto";

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService
	) {}

	async signIn(email: string, password: string) {
		const user = await this.usersService.getUserByEmail(email);
		if (user) {
			if (user && (await argon2.verify(user.password, password))) {
				const payload = { sub: user.id, username: user.email };
				return {
					access_token: await this.jwtService.signAsync(payload),
				};
			}
			return "Invalid email or password!";
		} else {
			return "User not found";
		}
	}
}
