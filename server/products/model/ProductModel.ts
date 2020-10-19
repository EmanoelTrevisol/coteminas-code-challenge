import mongoose, { Model, Document } from 'mongoose';
import { statuses, types, sizes } from './ProductStatics';

// TODO: Create indexes

export interface IProduct {
	title: string;
	price: number;
	offerPrice?: number;
	status: string;
	type: string;
	size: string;
	mainColor: string;
}

export interface IProductDoc extends Document, IProduct {}

export interface IProductModel extends Model<IProductDoc> {}

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      index: true,
      required: true,
		},
		mainColor: {
			type: String,
			index: true,
			required: true,
		},
		price: {
			type: Number,
			required: true,
			index: true,
		},
		offerPrice: {
			type: Number,
			required: false,
			index: true,
		},
		status: {
			type: String,
			required: true,
			enum: Object.values(statuses),
			default: statuses.ACTIVE,
		},
		type: {
			type: String,
			required: true,
			enum: Object.values(types),
		},
		size: {
			type: String,
			required: true,
			enum: Object.values(sizes),
		}
  },
  {
    timestamps: true,
    toObject: { virtuals: true, minimize: false },
    toJSON: { virtuals: true, minimize: false },
  }
);

export default mongoose.model<IProductDoc, IProductModel>('Product', ProductSchema);
