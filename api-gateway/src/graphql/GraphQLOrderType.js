// import { CategoryType } from './GraphQLCategoryType';
import { fetch, servicesURL } from './service.js';
import { UserType } from './GraphQLUserType.js';

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLList
} from 'graphql';

export const OrderType = new GraphQLObjectType({
  name: 'Order',
  description: 'Order type',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    // user
    userId: { type: GraphQLNonNull(GraphQLInt) },
    paid: { type: GraphQLNonNull(GraphQLBoolean) },
    address: { type: GraphQLNonNull(GraphQLString) },
    phoneNumber: { type: GraphQLNonNull(GraphQLString) },
    amount: { type: GraphQLNonNull(GraphQLFloat) },
    status: { type: GraphQLNonNull(GraphQLString) },
    reference: { type: GraphQLNonNull(GraphQLString) },
    // order_details: { type: GraphQLNonNull(GraphQLList) },
    created_at: { type: GraphQLNonNull(GraphQLString) },
    updated_at: { type: GraphQLNonNull(GraphQLString) },
    user: {
      type: UserType,
      resolve: async (order, args) => {
        let data = await fetch(servicesURL.USER_SERVICE);
        return data.user.find((user) => user.id === order.userId);
      }
    }
    // order_details: {
    //   type: new GraphQLList(OrderDetailType),
    //   resolve: async (order, args) => {
    //     let data = await serviceData.fetch(ServiceType.ORDER_SERVICE);
    //     return data.order_details.filter(
    //       (order_detail) => order_detail.orderId === order.id
    //     );
    //   }
    // }
  })
});
