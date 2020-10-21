import express, { NextFunction, Request, Response } from 'express';
import Boom from '@hapi/boom';
import productRoutes from './products/ProductApi';
import path from 'path';

const serverPublicPath = path.resolve(__dirname, '/public/');
export default function (app: express.Express) {
  app.use('/api/products', productRoutes);

  app.use('/css', express.static(`${serverPublicPath}css`));
  app.use('/fonts', express.static(`${serverPublicPath}fonts`));
  app.use('/img', express.static(`${serverPublicPath}img`));
  app.use('/js', express.static(`${serverPublicPath}js`));
  app.use('/assets', express.static(`${serverPublicPath}assets`));

  app.all('/*', (req, res) => {
    res
      .status(200)
      .set({
        'content-type': 'text/html; charset=utf-8',
      })
      .sendFile(`${serverPublicPath}index.html`);
  });
  app.use(express.static(`${serverPublicPath}static`));

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
