import { DataSource } from 'typeorm';
import Transaction from '../entity/Transaction.js';

const AppDataSource = new DataSource({
  type: process.env.DB_SCHEMA || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'test',
  database: 'ms-payment-service',
  entities: [Transaction],
  synchronize: true,
  logging: true,
});

export default AppDataSource;
