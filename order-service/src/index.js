import dotenv from 'dotenv';
import express from 'express';
import AppDataSource from './config/datasource.js';
import setupLogging from './logging.js';
import orderRoutes from './routes/order.routes.js';
import kafkaConsumer from './worker/consumer.js';
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


setupLogging(app);

const PORT = process.env.PORT || 3002;

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => console.log(error));

app.use('/api/orders', orderRoutes);

const kafkaTopic = 'transaction-success';
kafkaConsumer(kafkaTopic);

app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`order app listening at http://localhost:${PORT}`);
});
