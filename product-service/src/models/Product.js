//PRODUCT Schema
const Product = (sequelize, DataTypes) => {
  let Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    // userId:DataTypes.INTEGER,
    categoryId:DataTypes.INTEGER,
    sku:DataTypes.INTEGER,
    costPrice:DataTypes.FLOAT,
    sellingPrice:DataTypes.FLOAT,
    expirationDate:DataTypes.DATE,
    availableQuantity:DataTypes.INTEGER
    
  })

  // Product.associate = function(models) {
  //   Product.belongsToMany(models.Cart,{
  //     through: "cart_products",
  //     onDelete: 'CASCADE',

  //     as: "carts",
  //     // foreignKey: "cartId",
  //   })
  // };

  // Product.associate = function(models) {
  //   Product.belongsTo(models.User, {
  //     onDelete: "CASCADE",
  //     foreignKey: "userId",
  //   })
  // }

  Product.associate = function(models) {
      Product.belongsTo(models.Category, {
        onDelete: "CASCADE",
        foreignKey: "categoryId",
      })
    }

  return Product
}

export default Product