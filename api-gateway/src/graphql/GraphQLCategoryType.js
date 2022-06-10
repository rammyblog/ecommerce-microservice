const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql');

export const CategoryType = new GraphQLObjectType({
  name: 'Category',
  description: 'Category type',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    isActive: { type: GraphQLNonNull(GraphQLBoolean) }
  })
});
