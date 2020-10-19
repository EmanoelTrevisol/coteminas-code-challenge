import { Boom } from '@hapi/boom';
import mongoose from 'mongoose';
import Product, { IProduct } from './model/ProductModel';
import { statuses } from './model/ProductStatics';
import { listDefaultLimitOption } from '../validation/validationOptions';

function sanitize(product: mongoose.Document): IProduct {
	return product.toObject();
}

function getSearchQueryObject(filter?: string): { status: any, title?: any} {
	const baseFilterObj = {
		status: { $ne: statuses.INACTIVE },
	};

	if (!filter) return baseFilterObj;

	const regex = RegExp(filter, 'gi');

	return {
		...baseFilterObj,
		title: { $regex: regex },
	};
}

function getPerPageNumber(limit: string): number {
	const perPage = parseInt(limit, undefined);

	if (!Number.isNaN(perPage)) return perPage;
	else return listDefaultLimitOption;
}

function getPaginationSkipNumber({ page, perPage}: { page: string, perPage: number}) {
	const pageNumber = parseInt(page, undefined);

	if (!Number.isNaN(pageNumber)) return (pageNumber - 1) * perPage;
	else return 0; // if no page number is provided the first is considered
}

export { getSearchQueryObject, getPerPageNumber, getPaginationSkipNumber };

export default {
	async getProductsList({ page, limit, filter = ''}: { page: string, limit: string, filter: string }) {
		const query = getSearchQueryObject(filter);

		const perPage = getPerPageNumber(limit);
		const skip = getPaginationSkipNumber({ page, perPage });
	
		const [items, total] = await Promise.all([
			Product
				.find(query)
				.limit(perPage)
				.skip(skip),
			Product
			.countDocuments(query),
		]);
	
		return {
			items: items.map(sanitize),
			total,
		};
	}
};

