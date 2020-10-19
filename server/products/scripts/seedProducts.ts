/* tslint:disable no-var-requires no-console */
import connectToMongoDB, { killMongoMemoryServer } from '../../_config/db';
import setupEnvironmentVariables from '../../_config/env';
import Product, { IProduct } from '../model/ProductModel';
import { types, statuses, sizes } from '../model/ProductStatics';
import faker from 'faker';
import { exit } from 'process';

faker.locale = 'pt_BR';

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv

const quantity = argv.quantity || 500;

const sizesFilteredStringMap = new Map<string, string>(
	[
		['SINGLE', 'solteiro'],
		['COUPLE', 'casal'],
		['QUEEN', 'queen'],
		['KING', 'king'],
		['KID', 'infantil'],
	]
);

const typesFilteredStringMap = new Map<string, string>(
	[
		['SHEET',  'lençol'],
		['PILLOW',  'travesseiro'],
		['CUSHION', 'almofada'],
		['BEDSPREAD', 'colcha'],
		['BLANKET', 'cobertor'],
	]
);

const sizesArr = Array.from(sizesFilteredStringMap.keys());
const typesArr = Array.from(typesFilteredStringMap.keys());

function getSizeAndType() {
	return {
		type: typesArr[Math.floor(Math.random() * (typesArr.length - 1))],
		size: sizesArr[Math.floor(Math.random() * (sizesArr.length - 1))],
	};
}

function getTitle({ mainColor, type, size }: { mainColor: string, type: string, size: string}) {
	const arr = ['kit', 'jogo', 'conjunto', ''];
	const [randomIndex, randomOddOrEven] = [Math.floor(Math.random() * (arr.length - 1)), Math.floor(Math.random() * 100)];
	const firstWord = arr[randomIndex];
	

	let title = firstWord ? `${firstWord} ${type}` : type;

	if (randomOddOrEven % 3 === 0) title = `${title} ${size}`;
	else if (randomOddOrEven % 2 === 0) title = `${title} ${mainColor}`;
	else title = `${title} ${size} ${mainColor}`;

	return (randomIndex * (randomOddOrEven - randomIndex)) % 2 === 0 ? `${faker.commerce.productAdjective()} ${title}` : title;
}

function getPrices() {
	const price = Math.round((Math.random() * Math.random() * 1000) * 100) / 100;
	const hasOffer =  Math.floor(Math.random() * 100) % 2 === 0;
	const offerPrice = hasOffer ? Math.round(price * Math.random() * 100) / 100 : undefined;

	return {
		price, 
		offerPrice
	};
}

function getStatus() {
	const rounded = Math.floor(Math.random() * 100);

	if (rounded % 5 === 0) return statuses.INACTIVE;
	else if (rounded % 3 === 0) return statuses.SOLD_OUT;
	else return statuses.ACTIVE;
}

function getProductObj(): IProduct {
	const { type, size } = getSizeAndType();
	const mainColor = faker.commerce.color();
	const typeFilteredString = <string> typesFilteredStringMap.get(type);
	const sizeFilteredString = <string> sizesFilteredStringMap.get(size);
	
	const { price, offerPrice } = getPrices();

	return {
		title: getTitle({ mainColor, type: typeFilteredString, size: sizeFilteredString }),
		type,
		size,
		price,
		mainColor,
		offerPrice,
		status: getStatus(),
	};
}

function getProductsArray() {
	console.log(`Adding ${quantity} products`);

	const products: IProduct[] = [];

	for (let i = 0; i < quantity; i++) {
		products.push(getProductObj());
	}

	return products;
}

function dropCollection() {
	return Product.collection.drop()
}

export async function seedProducts() {
	try {
		setupEnvironmentVariables();
		await connectToMongoDB();
		await dropCollection();
	
		const products = getProductsArray();
	
		await Product.insertMany(products);
		await killMongoMemoryServer();
	
		exit(0)
	} catch (error) {
		console.error(error);
		exit(1)
	}
	
}

seedProducts();
