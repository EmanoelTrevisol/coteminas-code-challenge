	/* tslint:disable no-console */
import mongoose from 'mongoose';
import { exit } from 'process';

export async function killMongoMemoryServer() {
	await mongoose.disconnect();
}

export default async function () {
	try {
		const connection = await mongoose.connect(<string> process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	
		mongoose.connection.on('error', (error) => {
			console.error('mongoose connection error: ', error);
		});

		return connection;
	} catch (error) {
		console.log('Error connecting to mongodb');
		console.error(error);
		exit(1);
	}
}
