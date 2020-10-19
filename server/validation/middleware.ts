import { RequestHandler } from 'express';
import Boom from '@hapi/boom';
import { validationResult } from 'express-validator';
import { listLimitOptions, listDefaultLimitOption } from './validationOptions';
import errorMessages from '../errors/messages';

export function checkValidators() {
	return <RequestHandler>function (req, _, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) next(Boom.badData(errors.array()[0].msg));
    else next();
  };
}

export function listLimit() {
	return <RequestHandler>function (req, _, next) {
		const limit = parseInt(<string> req.query.limit, undefined);

		if (!Number.isNaN(limit) && !listLimitOptions.includes(limit)) {
			next(Boom.badData(errorMessages.list.invalidLimit))
		}

		next();
	}
}

export function listPage() {
	return <RequestHandler>function (req, _, next) {
		const page = parseInt(<string> req.query.page, undefined);

		if (!Number.isNaN(page) && page < 1) {
			next(Boom.badData(errorMessages.list.invalidPage))
		}

		next();
	}
}
