import sequelize from './postgres.js';

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // await sequelize.sync({ force: false, alter: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    process.env.DB_PORT;
    console.error('Unable to connect to the database:', error);
  }
};

export default connectDb;
