import { Request, Response, NextFunction } from 'express';

import ErrorFactory from '../factories/ErrorFactory';

import { ErrorStatusCode, IBaseMiddleware } from '../utils/core';

export default class NotFoundMiddleware implements IBaseMiddleware {
  public performAction(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    const status = ErrorStatusCode.NOT_FOUND;
    const message = 'Resource not found';

    response.status(status).send(message);
  }
}
