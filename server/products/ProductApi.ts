import express, { Request, Response, NextFunction} from 'express';
import { checkValidators, listLimit, listPage } from '../validation/middleware';
import ProductManager from './ProductManager';

const router = express.Router();

router.get(
	'/', 
	
	listLimit(),
	listPage(),
	checkValidators(),
	
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			const data = await ProductManager.getProductsList({ filter: <string> req.query.filter, page: <string> req.query.page, limit: <string> req.query.limit })
			
			return res.json(data);
		} catch (error) {
			next(error);
		}
});

export default router;
