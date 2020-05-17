import { Request, Response, NextFunction } from 'express';

import ErrorFactory from '../factories/ErrorFactory';

import { ErrorStatusCode, IBaseMiddleware } from '../utils/utils';

export default class ErrorMiddleware implements IBaseMiddleware {
  public performAction(
    error: ErrorFactory,
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    const status = error.statusCode || ErrorStatusCode.INTERNAL_ERROR;
    const message =
      error.message || "It's not you. It's us. We are having some problems.";

    response.status(parseInt(status.toString())).send(message);
  }
}
