import { createConnection, getConnectionOptions } from 'typeorm';

const start = async () => {
  const connectionOptions = await getConnectionOptions();
  const connection = await createConnection(connectionOptions);

  if (!connection.isConnected)
    throw new Error(
      'Deliveryn API Project] Could not stablish a connection with database, check connection props'
    );
};
export default () => {
  return {
    start,
  };
};
