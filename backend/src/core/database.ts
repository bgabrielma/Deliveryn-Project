import { createConnection } from 'typeorm';

import { connectionOptions } from '../config/DatabaseAuthentication';

const start = () => createConnection(connectionOptions);

export default () => {
  return {
    start,
  };
};
