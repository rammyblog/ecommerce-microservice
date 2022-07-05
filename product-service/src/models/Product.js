import Sequelize from 'sequelize';
import sequelize from '../db/postgres.js';
import Category from './Category.js';

const Product = sequelize.define(
  'Products',
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
    categoryId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Categories',
        key: 'id'
      },
      allowNull: false
    },
    sku: {
      type: Sequelize.STRING,
      allowNull: false
    },
    availableQuantity: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    costPrice: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    sellingPrice: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      default: true
    },
    image: {
      type: Sequelize.TEXT,
      allowNull: true
    }
  },

  { freezeTableName: true }
);

export default Product;
