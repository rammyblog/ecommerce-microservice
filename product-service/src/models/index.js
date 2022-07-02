Category.hasMany(Product, {
  as: 'products',
  foreignKey: 'categoryId',
  sourceKey: 'id'
});
