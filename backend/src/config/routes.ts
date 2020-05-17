import express, { Request, Response, RequestHandler } from 'express';
import { ErrorStatusCode } from '../utils/utils';

const router = express.Router();

router.get('/', function (req: Request, res: Response) {
  res
    .status(ErrorStatusCode.OK)
    .send({ welcome: 'Welcome to Deliveryn open API' });
});

export default router;
