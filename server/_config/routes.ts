import express, { NextFunction, Request, Response } from 'express';
import Boom from '@hapi/boom';
import productRoutes from '../products/ProductApi';

export default function (app: express.Express) {

	app.use('/products', productRoutes);

	// Error handling
	app.use(function (err: Error, req: Request, res: Response, _: NextFunction) {
		const error = Boom.isBoom(err) ? err : Boom.boomify(err);
		
		// tslint:disable-next-line: no-console
		if (process.env.NODE_ENV !== 'test') console.trace(error);
		return res.status(error.output.statusCode).json({
			error: error.name,
			message: error.message,
		});
	});
}
