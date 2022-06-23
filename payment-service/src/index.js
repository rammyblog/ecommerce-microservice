import dotenv from 'dotenv';
import express from 'express';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'
import setupLogging from './logger.js';
import transactionRoutes from './routes/transaction.routes.js';
import AppDataSource from './config/datasource.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupLogging(app);

app.use('/api/transaction', transactionRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => console.log(error));

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Payment Server is running on port ${port}`);
});
