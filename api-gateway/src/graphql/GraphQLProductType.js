import { CategoryType } from './GraphQLCategoryType';

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull
} = require('graphql');

export const ProductType = new GraphQLObjectType({
  name: 'Product',
  description: 'Product type',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    categoryId: { type: GraphQLNonNull(GraphQLInt) },
    sku: { type: GraphQLNonNull(GraphQLInt) },
    costPrice: { type: GraphQLNonNull(GraphQLFloat) },
    sellingPrice: { type: GraphQLNonNull(GraphQLFloat) },
    expirationDate: { type: GraphQLNonNull(GraphQLString) },
    availableQuantity: { type: GraphQLNonNull(GraphQLInt) },
    category: {
      type: CategoryType,
      resolve: async (product, args) => {
        let data = await serviceData.fetch(ServiceType.AUTHOR_SERVICE);
        return data.products.find(
          (category) => category.id === product.categoryId
        );
      }
    }
  })
});
