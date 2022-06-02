const { sequelize } = require("../models");

//create-post.js
module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable("Products", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },

        description:{
          allowNull: false,
          type: Sequelize.TEXT
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,

        },
        sellingPrice:{
          allowNull:false,
          type:Sequelize.FLOAT
        },
        costPrice:{
          allowNull:false,
          type:Sequelize.FLOAT
        },
        categoryId:{
            type:Sequelize.INTEGER,
            onDelete: "CASCADE",
            references:{
                model:"categories",
                key:"id",
                as: "categoryId"
            },
        }, 
        userId: {
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: "users",
            key: "id",
            as: "userId",
          },
        },
        sku:{
          allowNull:false,
          type:Sequelize.INTEGER
        },
        
        availableQuantity:{
          allowNull:false,
          type:Sequelize.INTEGER
        },
        expirationDate:{
          allowNull:true,
          type:Sequelize.DATE
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("Products"),
}