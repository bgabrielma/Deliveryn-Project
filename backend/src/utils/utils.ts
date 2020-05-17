import { Request, Response, NextFunction } from 'express';
import ErrorFactory from '../factories/ErrorFactory';

/**
 * @types
 */
type RouterHandlerWithError = (
  Error: ErrorFactory,
  Request: Request,
  Response: Response,
  Next: NextFunction
) => void;

type RouterHandlerWithoutError = (
  Request: Request,
  Response: Response,
  Next: NextFunction
) => void;

/**
 *
 * @interfaces
 *
 */
export interface IBaseMiddleware {
  performAction: (
    ...args: Parameters<RouterHandlerWithError | RouterHandlerWithoutError>
  ) => void;
}

/**
 *
 * @enumerators
 *
 */
export enum ErrorStatusCode {
  OK = 200,
  INTERNAL_ERROR = 500,
  NOT_FOUND = 404,
}

/**
 *
 * @constants
 *
 */

export const EXPRESS_SERVER_PORT_NUMBER = 3000;
