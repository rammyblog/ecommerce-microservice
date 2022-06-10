import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_SCHEMA || 'api-gateway',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'test',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: process.env.DB_SSL == 'true'
    }
  }
);

export default sequelize;
