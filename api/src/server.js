// const { ROUTES } = require('./routes');
import dotenv from 'dotenv';
import express from 'express';
import connectDb from './db/index.js';
import setupLogging from './logging.js';
import setupProxies from './proxy.js';
import ROUTES from './routes.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDb();
const port = process.env.PORT || 3000;

setupLogging(app);
setupProxies(app, ROUTES);

app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`api-gateway app listening at http://localhost:${port}`);
});
