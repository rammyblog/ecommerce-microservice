const { Sequelize, DataTypes } = require('sequelize');

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
    }
  },
  {
    timestamps: true
  }
);

exports.User = User;
