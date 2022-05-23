import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'postgres://postgres:test@localhost:5432/api-gateway'
);

export default sequelize;
