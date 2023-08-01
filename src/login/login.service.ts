import { Injectable } from "@nestjs/common";
import { User } from "src/users/schemas/user.schema";
import { UsersService } from "src/users/users.service";
import * as argon2 from "argon2";

@Injectable()
export class LoginService {
	constructor(private readonly usersService: UsersService) {}
	async loginUser(body: { email: string; password: string }) {
		const response = await this.usersService.getUserByEmail(body.email);
		if (response) {
			const res = await argon2.verify(response.password, body.password);
			if (res) {
				return "Matched";
			}
			return "Unmatched";
		}
		return null;
	}
}
