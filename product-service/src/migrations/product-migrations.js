module.exports = {
  up: (queryInterface, Sequelize) =>
     queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sellingPrice: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      costPrice: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      // name of the key we're adding
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories', // name of Target model
          key: 'id' // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      // userId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: "CASCADE",
      //   references: {
      //     model: "users",
      //     key: "id",
      //     as: "userId",
      //   },
      // },
      sku: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      availableQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      isActive: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      expirationDate: {
        allowNull: true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface /* , Sequelize */) => {
    // queryInterface.removeColumn('Products', 'categoryId');
    queryInterface.dropTable('Products');
  }
};
