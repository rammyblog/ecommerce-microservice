const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql');

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User type',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    firstName: { type: GraphQLNonNull(GraphQLString) },
    lastName: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    role: { type: GraphQLNonNull(GraphQLString) }
  })
});
