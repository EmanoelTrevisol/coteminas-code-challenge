import dotenv from 'dotenv';
import path from 'path';

export default function () {
	if (process.env.NODE_ENV === 'test') {
		dotenv.config({ path: path.resolve(__dirname, 'test')});
	} else {
		dotenv.config({ path: path.resolve(__dirname, 'default')});
	}
}
