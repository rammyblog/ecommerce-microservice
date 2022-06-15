import dotenv from 'dotenv';
import express from 'express';
import setupLogging from './logger.js';
import transactionRoutes from './routes/transaction.routes.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupLogging(app);

app.use('/api/transaction', transactionRoutes);

app.listen(port, () => {
  console.log(`Payment Server is running on port ${port}`);
});