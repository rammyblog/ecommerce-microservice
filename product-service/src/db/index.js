import sequelize from './postgres.js';
import setupModels from './setupModels.js';

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    setupModels();
    await sequelize.sync();
    console.log('All models were synchronized successfully.');
  } catch (error) {
    process.env.DB_PORT;
    console.error('Unable to connect to the database:', error);
  }
};

export default connectDb;
