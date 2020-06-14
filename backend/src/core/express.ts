import express, { Express } from 'express';
import Routes from '../config/routes';

import { ConfigureApollo } from '../core/apollo-server';

import ErrorMiddleware from '../middlewares/ErrorMiddleware';
import NotFoundMiddleware from '../middlewares/NotFoundMiddleware';

import { EXPRESS_SERVER_PORT_NUMBER } from '../utils/utils';

import cors from 'cors';

const applyMiddlewares = (app: Express) => {
  // Express default middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Allow other origins to access
  app.use(cors());

  // routes
  app.use(Routes);

  /**
   * Custom middlewares
   * */

  // Apollo guide
  ConfigureApollo(app);

  // catch 500 and forward to error handler
  app.use(new ErrorMiddleware().performAction);

  // catch 404 and forward to error handler
  app.use(new NotFoundMiddleware().performAction);
};

const start = () => {
  const app = express();

  applyMiddlewares(app);

  app.listen(
    EXPRESS_SERVER_PORT_NUMBER,
    () => 'Server running at port ' + EXPRESS_SERVER_PORT_NUMBER
  );
};

export default () => {
  return {
    start,
  };
};
