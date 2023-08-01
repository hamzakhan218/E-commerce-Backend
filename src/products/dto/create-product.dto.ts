export type productType = {
	reviewerName: string;
	reviewerId: string;
	stars: number;
	comment: string;
};
export class CreateProductDto {
	id: string;
	name: string;
	price: number;
	image: string;
	publishDate: string;
	OwnerId: string;
	description: string;
	category: string;
	stock: number;
	reviews: productType[];
}
