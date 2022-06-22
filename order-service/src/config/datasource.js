import { DataSource } from 'typeorm';
import Order from '../entity/Order.js';
import OrderDetail from '../entity/OrderDetail.js';

const AppDataSource = new DataSource({
  type: process.env.DB_DRIVER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'test',
  database: process.env.DB_SCHEMA || 'ms-order',
  entities: [Order, OrderDetail],
  synchronize: true,
  logging: true,
});

export default AppDataSource;
