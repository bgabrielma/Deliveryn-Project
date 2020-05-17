import express, { Express } from 'express';
import Routes from '../config/routes';

import ErrorMiddleware from '../middlewares/ErrorMiddleware';
import NotFoundMiddleware from '../middlewares/NotFoundMiddleware';

import { EXPRESS_SERVER_PORT_NUMBER } from '../utils/utils';

const applyMiddlewares = (app): void => {
  //
  // Express default middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // routes
  app.use(Routes);

  // Custom middlewares

  // catch 500 and forward to error handler
  app.use(new ErrorMiddleware().performAction);

  // catch 404 and forward to error handler
  app.use(new NotFoundMiddleware().performAction);
};

const start = (): void => {
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
