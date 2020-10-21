# coteminas-code-challenge

## Requirements

This project was built using Typescript, NodeJS, ExpressJS, Vuejs and MongoDB among other libraries and packages.

You'll need the requirements listed above to run this project. 

**The current version for each of them should suffice.**

## How do I run this project?

While developing, you'll run the backend and frontend separately.
Before running the project, you can run `npm install` or `yarn install` both on `server/` and `webapp/` folders.

### Backend

After installing dependencies, you can run `yarn run seed:local` to populate your database.

#### Running

Now you can run `yarn dev` to run your backend. It should be listening for connections on port 8000. Feel free to change the env settings to serve on your preferred port.

#### Structure
The project is organized by feature. This means that for the `product` feature the APIs, models and all related to product will be inside the `product/` folder.

#### Testing

When running tests the project will **not** use the same database as for developing. So, before running your tests, you should check the `default` file inside `_config/env` for the database specified. You can run `yarn run seed:test` to populate the database used for testing.

#### Building
Run `yarn build` and commit the changes. CI/CD will be configured in the future

### Frontend

#### Running
After installing dependencies, you can simply run `yarn run serve` inside `webapp/` to run the frontend. The `.env` file inside `webapp/` sets the backend api path to `localhost:8000`, so if you changed the port for the backend, don't forget to change it here too.

#### Structure
Each folder inside the `modules/` is a complete module. It contains components, views, apis, routes and store. The module `product/` is the main module of this project and that's what you see when opening the project in the browser. You can add more modules or even change the structure, just don't forget to import the routes and store to each file in `webapp/`.

#### Testing

Inside `webapp/`, simply run `yarn run test:unit:watch`. This will run all tests inside the unit folder. To simplify, I put all tests inside `unit/` folder. 

#### Building
Run `yarn build` and commit the changes. CI/CD will be configured in the future.
