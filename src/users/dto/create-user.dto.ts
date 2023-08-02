import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
	id: string;

	@IsNotEmpty()
	@MinLength(5)
	name: string;

	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	@MinLength(8)
	password: string;
}
