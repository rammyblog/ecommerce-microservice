//CATEGORY Schema
module.exports = (sequelize, DataTypes) => {
    let Category = sequelize.define("Category", {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      isActive:DataTypes.BOOLEAN
    })
  
    Category.associate = function(models) {
      Category.hasMany(models.Product, {as: 'products'})
    };
  
    return Category
  }