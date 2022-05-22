/* eslint-disable import/extensions */
// const { ROUTES } = require('./routes');
import express from 'express';
import ROUTES from './routes.js';
import setupLogging from './logging.js';
import setupProxies from './proxy.js';
import connectDb from './db.js';

const app = express();
connectDb();
const port = 3000;

setupLogging(app);
setupProxies(app, ROUTES);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
