import 'reflect-metadata';

// Entities
import { User } from './entity/User';

// Factories
import DatabaseFactory from './factories/DatabaseFactory';
import ExpressFactory from './factories/ExpressFactory';

// new DatabaseFactory().connectDatabase();
new ExpressFactory().startServer();
