const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'postgres://postgres:test@localhost:5432/api-gateway'
);

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ force: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

exports.connectDb = connectDb;
