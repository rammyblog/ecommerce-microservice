//PRODUCT Schema
const Product = (sequelize, DataTypes) => {
  let Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    // categoryId: DataTypes.INTEGER,
    sku: DataTypes.INTEGER,
    costPrice: DataTypes.FLOAT,
    sellingPrice: DataTypes.FLOAT,
    expirationDate: DataTypes.DATE,
    availableQuantity: DataTypes.INTEGER
  });
  Product.associate = function (models) {
    Product.belongsTo(models.Category, {
      onDelete: 'CASCADE',
      foreignKey: 'categoryId'
    });
  };

  return Product;
};

export default Product;
