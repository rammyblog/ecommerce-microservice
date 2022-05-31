import dotenv from 'dotenv';
import express from 'express';
import connectDb from './db/index.js';
import setupLogging from './logging.js';
import setupProxies from './proxy.js';
import ROUTES from './routes.js';
import authRoutes from './routes/auth.routes.js';
import setupAuth from './setupAuth.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDb();
const port = process.env.PORT || 3000;

setupLogging(app);
setupAuth(app, ROUTES);
setupProxies(app, ROUTES);

app.use('/api/auth', authRoutes);

app.get('/api/protected', function (req, res) {
  res.send('hello world');
});

app.get('/api/free', function (req, res) {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`api-gateway app listening at http://localhost:${port}`);
});
