import { DataTypes } from 'sequelize';
import sequelize from '../db/postgres.js';

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    role: {
      type: DataTypes.ENUM,
      allowNull: true,
      values: ['member', 'admin'],
      defaultValue: 'member'
    }
  },
  {
    timestamps: true
  }
);

export default User;
