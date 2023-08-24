/* eslint-disable indent */
// import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

// export type UserDocument = User & Document;

export type User = {
	// @Prop()
	id: string;

	// @Prop()
	name: string;

	// @Prop()
	email: string;

	// @Prop()
	password: string;
};

// export const userSchema = SchemaFactory.createForClass(User);
