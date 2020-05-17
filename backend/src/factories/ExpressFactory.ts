import express, { Express, Response, NextFunction, Request } from 'express';

import ErrorMiddleware from '../middlewares/ErrorMiddleware';
import NotFoundMiddleware from '../middlewares/NotFoundMiddleware';

export default class ExpressFactory {
  public static __app: Express;
  private static readonly PORT_NUMBER = 3000;

  public static getInstance(): Express {
    this.__app = this.__app || express();

    return ExpressFactory.__app;
  }

  private configureApp() {
    const app = ExpressFactory.getInstance();

    // middleware

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    /**
     *
     * @todo routes files
     * @ignore
     *
     */

    // routes
    app.get('/', function (req, res) {
      throw new Error('test');
    });

    // catch 500 and forward to error handler
    app.use(new ErrorMiddleware().performAction);

    // catch 404 and forward to error handler
    app.use(new NotFoundMiddleware().performAction);
  }

  public startServer(): void {
    this.configureApp();

    ExpressFactory.getInstance().listen(
      ExpressFactory.PORT_NUMBER,
      () =>
        '[Deliveryn App Express] app server is running at port ' +
        ExpressFactory.PORT_NUMBER
    );
  }
}
