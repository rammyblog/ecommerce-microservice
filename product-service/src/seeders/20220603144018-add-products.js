module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('Products', [
    {
      name: 'Strawberry',
      description:'Some stuff',
      sellingPrice:200.00,
      costPrice:200.00,
      availableQuantity:10,
      sku:2001,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Coconut',
      description:'Some stuff',
      sellingPrice:200.00,
      costPrice:200.00,
      availableQuantity:10,
      sku:2001,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Mango',
      description:'Some stuff',
      sellingPrice:200.00,
      costPrice:200.00,
      availableQuantity:10,
      sku:2001,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Fruit',
      description:'Some stuff',
      sellingPrice:200.00,
      costPrice:200.00,
      availableQuantity:10,
      sku:2001,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
  ], {}),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Products', {[Op.or]: [{name: 'USD'}, {name: 'EUR'}]});
  }
};