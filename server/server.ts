import express from 'express';
import routes from './routes';
import setupEnvironmentVariables from './_config/env';
import connectToMongoDB from './_config/db';
import cors from 'cors';

setupEnvironmentVariables();

connectToMongoDB();

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes(app);

export default app;
