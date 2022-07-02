import Sequelize from 'sequelize';
import sequelize from '../db/postgres.js';
import Product from './Product.js';

const Category = sequelize.define(
  'Categories',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      allowNull: false
      // default:true
    }
  },

  { freezeTableName: true }
);

export default Category;
