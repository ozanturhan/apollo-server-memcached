import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import express from 'express';
import fs from 'fs';
import resolvers from './resolvers';
import dataSources from './datasources';
import { createCache, typeDefs } from './config';

const app = express();

// Fake APIs
app.get('/books', function (req, res) {
  const books = fs.readFileSync(`${process.cwd()}/mock-data/books.json`, 'utf-8');
  res.send(JSON.parse(books));
});

app.get('/libraries', function (req, res) {
  res.send([
    {
      branch: 'downtown',
    },
    {
      branch: 'riverside',
    },
  ]);
});

// Apollo server configuration
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cache: createCache(),
  dataSources,
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);

httpServer.listen({ port: 4000 }, () => {
  console.log(`Server ready at 4000`);
});
