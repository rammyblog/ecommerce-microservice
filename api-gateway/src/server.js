import dotenv from 'dotenv';
import express from 'express';
import connectDb from './db/index.js';
import setupLogging from './logging.js';
import setupProxies from './proxy.js';
import ROUTES from './proxyRoutes/index.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import setupAuth from './setupAuth.js';
import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import RootQueryType from './graphql/GraphQLQuery.js';

dotenv.config();
const app = express();
setupAuth(app, ROUTES);
setupProxies(app, ROUTES);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDb();
const port = process.env.PORT || 3000;

setupLogging(app);

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.get('/api/protected', function (req, res) {
  res.send('hello world');
});

app.get('/api/free', function (req, res) {
  res.send('hello world');
});

const schema = new GraphQLSchema({
  query: RootQueryType
});

app.use(
  '/api/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log(`api-gateway app listening at http://localhost:${port}`);
});
