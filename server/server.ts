import express from 'express';
import routes from './_config/routes';
import setupEnvironmentVariables from './_config/env';
import connectToMongoDB from './_config/db';

setupEnvironmentVariables();

connectToMongoDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes(app)

export default app;
