import {
	IsDate,
	IsDateString,
	IsInt,
	IsNotEmpty,
	IsString,
	Min,
	MinLength,
} from "class-validator";

import { CreateProductDto } from "../../products/dto/create-product.dto";

export class CreateCartDto {
	id: string;

	@IsNotEmpty()
	@IsString()
	ownerEmail: string;

	@IsNotEmpty()
	items: {
		product: CreateProductDto;
		quantity: number;
	}[];
}
