module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'Sleek Perfume',
          description:
            'But overall scale photography is used to render the size of an object quite often. Even rucksacks differ in size and may need more context and an indication of the size used against a human back or next to an iPhone and a notepad.',
          sellingPrice: 200.0,
          costPrice: 200.0,
          availableQuantity: 10,
          sku: 2001,
          isActive: true,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          image:
            'https://global-uploads.webflow.com/6256995755a7ea0a3d8fbd11/6257ec4d718f7c2966c62d69_5def862ab67e21987db97ca9_Featured_October_1%2520(1).png'
        },
        {
          name: 'Eua De Ment',
          description:
            'Use it if you have invested or have gone to the length of elaborating the branded packaging. Use it if your packaging echoes the brands identity. Use it if your packaging is damn cute.',
          sellingPrice: 200.0,
          costPrice: 200.0,
          availableQuantity: 10,
          categoryId: 1,
          sku: 2001,
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          image:
            'https://global-uploads.webflow.com/6256995755a7ea0a3d8fbd11/6257ec4bac44e281edd87c7b_5def810b96295499d7d3759e_0*oGmH1YAxnrRhHe7H.png'
        },
        {
          name: 'Three Crowns',
          description:
            'Use it if you have invested or have gone to the length of elaborating the branded packaging. Use it if your packaging echoes the brand’s identity. Use it if your packaging is damn cute.',
          sellingPrice: 200.0,
          costPrice: 200.0,
          availableQuantity: 10,
          categoryId: 2,
          sku: 2001,
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          image:
            'https://global-uploads.webflow.com/6256995755a7ea0a3d8fbd11/6257ec4bac44e281edd87c7b_5def810b96295499d7d3759e_0*oGmH1YAxnrRhHe7H.png'
        },
        {
          name: 'Fruit',
          description:
            'Use it if you have invested or have gone to the length of elaborating the branded packaging. Use it if your packaging echoes the brand’s identity. Use it if your packaging is damn cute.',
          sellingPrice: 200.0,
          costPrice: 200.0,
          categoryId: 3,
          availableQuantity: 10,
          sku: 2001,
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date(),
          image:
            'https://global-uploads.webflow.com/6256995755a7ea0a3d8fbd11/6257ec4d718f7c2966c62d69_5def862ab67e21987db97ca9_Featured_October_1%2520(1).png'
        }
      ],
      {}
    ),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Products');
  }
};
