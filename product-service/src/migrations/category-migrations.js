//create-post.js
module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable("Categories", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
  
        description:{
          type: Sequelize.TEXT,
          allowNull: true
        },
  
        isActive:{
          allowNull: false,
          type: Sequelize.BOOLEAN,
          defaultValue:true
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
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("Categories"),
  }