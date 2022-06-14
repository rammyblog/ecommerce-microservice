import { GraphQLInt, GraphQLList, GraphQLObjectType } from 'graphql';
import { OrderType } from './GraphQLOrderType.js';
import { fetch, servicesURL } from './service.js';

// const OrderType = new GraphQLOrderType();

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    // order: {
    //   type: OrderType.type,
    //   description: 'query of a single order',
    //   args: {
    //     id: { type: GraphQLInt }
    //   },
    //   resolve: async (parent, args) => {
    //     let data = await serviceData.fetch(ServiceType.ORDER_SERVICE);
    //     return data.orders.find((order) => order.id === args.id);
    //   }
    // },
    orders: {
      type: new GraphQLList(OrderType),
      description: 'query of  a list of orders',
      resolve: async () => {
        console.log(servicesURL.ORDER_SERVICE);
        let data = await fetch(servicesURL.ORDER_SERVICE);
        return data.orders;
      }
    }
  })
});

export default RootQueryType;
