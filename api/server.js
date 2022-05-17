const express = require('express');

const { ROUTES } = require('./routes');

const { setupLogging } = require('./logging');
const { setupProxies } = require('./proxy');
const { connectDb } = require('./db');

const app = express();
connectDb();
const port = 3000;

setupLogging(app);
setupProxies(app, ROUTES);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
