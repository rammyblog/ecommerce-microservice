import Category from '../models/Category.js';
import Product from '../models/Product.js';

export default function setupModels() {
  Category.hasMany(Product, {
    as: 'products',
    foreignKey: 'categoryId',
    sourceKey: 'id'
  });

  Product.belongsTo(Category, {
    onDelete: 'CASCADE',
    foreignKey: 'categoryId',
    targetKey: 'id',
    as: 'category'
  });
}
