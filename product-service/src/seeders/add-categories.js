module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: 'Cloths',
          description: 'Some stuff',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Fruits',
          description: 'Some stuff',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Food',
          description: 'Some stuff',
          isActive: true,
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
