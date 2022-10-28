import dotenv from 'dotenv';
import express from 'express';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import setupLogging from './logger.js';
import transactionRoutes from './routes/transaction.routes.js';
import AppDataSource from './config/datasource.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupLogging(app);

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => console.log(error));

app.use('/api/transaction', transactionRoutes);

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Payment Server is running on port ${port}`);
});
