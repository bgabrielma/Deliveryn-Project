import { ApolloServer, gql } from 'apollo-server-express';
import { Express } from 'express';

const setup = (app: Express) => {
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => 'Hello world!',
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });

  // Merge apollo server into app express server
  server.applyMiddleware({ app });
};

export { setup as ConfigureApollo };
