import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";
import * as argon2 from "argon2";
import { User } from "src/users/schemas/user.schema";

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService
	) {}

	async signIn(email: string, password: string) {
		const user: { documents: [User] | [] } =
			await this.usersService.getUserByEmail(email);
		if (user.documents.length >= 1) {
			if (user && (await argon2.verify(user.documents[0].password, password))) {
				const payload = {
					sub: user.documents[0].id,
					email: user.documents[0].email,
					name: user.documents[0].name,
				};
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
