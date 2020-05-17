import { ConnectionManager, Connection } from 'typeorm';

import { connectionOptions } from '../config/DatabaseAuthentication';

export default class DatabaseFactory {
  private static __connection: Connection;

  public static getConnection(): Connection {
    this.__connection =
      this.__connection || new ConnectionManager().create(connectionOptions);

    return DatabaseFactory.__connection;
  }

  public async connectDatabase(): Promise<void> {
    console.log('[Deliveryn Database] starting connection process...');

    if (!DatabaseFactory.getConnection().isConnected) {
      DatabaseFactory.getConnection()
        .connect()
        .then(() =>
          console.log('[Deliveryn Database] database is now connected...')
        )
        .catch((e: Error) => {
          throw e;
        });
    } else {
      console.warn(
        '[Deliveryn Database] An instance of the database is already in process... Ignoring request'
      );
    }
  }
}
