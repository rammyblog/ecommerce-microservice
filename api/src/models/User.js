import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize();

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
      allowNull: false,
      values: ['member', 'admin'],
      defaultValue: 'member'
    }
  },
  {
    timestamps: true
  }
);

export default User;
