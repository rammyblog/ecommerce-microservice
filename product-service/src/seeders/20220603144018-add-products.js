module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Strawberry',
          description: 'Some stuff',
          sellingPrice: 200.0,
          costPrice: 200.0,
          availableQuantity: 10,
          sku: 2001,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Coconut',
          description: 'Some stuff',
          sellingPrice: 200.0,
          costPrice: 200.0,
          availableQuantity: 10,
          categoryId: 4,
          sku: 2001,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mango',
          description: 'Some stuff',
          sellingPrice: 200.0,
          costPrice: 200.0,
          availableQuantity: 10,
          categoryId: 5,
          sku: 2001,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fruit',
          description: 'Some stuff',
          sellingPrice: 200.0,
          costPrice: 200.0,
          categoryId: 4,
          availableQuantity: 10,
          sku: 2001,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),
  down: async (queryInterface) => {
    // await queryInterface.bulkDelete('Products', {
    //   [Op.or]: [{ name: 'USD' }, { name: 'EUR' }]
    // });
  }
};
