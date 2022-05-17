const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'postgres://postgres:test@localhost:5432/api-gateway'
);

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

exports.connectDb = connectDb;
