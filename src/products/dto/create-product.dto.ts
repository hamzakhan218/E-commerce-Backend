import {
	IsDate,
	IsDateString,
	IsInt,
	IsNotEmpty,
	IsString,
	Min,
	MinLength,
} from "class-validator";

export type productType = {
	reviewerName: string;
	reviewerId: string;
	stars: number;
	comment: string;
};
export class CreateProductDto {
	id: string;

	@IsNotEmpty()
	@MinLength(5)
	name: string;

	@IsNotEmpty()
	@IsInt()
	@Min(0)
	price: number;

	@IsNotEmpty()
	image: string;

	@IsNotEmpty()
	@IsDateString()
	publishDate: Date;

	@IsNotEmpty()
	@IsString()
	ownerEmail: string;

	@IsNotEmpty()
	@IsString()
	@MinLength(20)
	description: string;

	@IsNotEmpty()
	category: string;

	@IsNotEmpty()
	@IsInt()
	@Min(0)
	stock: number;

	reviews: productType[];
}
