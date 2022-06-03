import express from 'express';
import AppDataSource from './config/datasource.js';
import setupLogging from './logging.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(setupLogging);

const PORT = process.env.PORT || 3002;

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`order app listening at http://localhost:${PORT}`);
});
