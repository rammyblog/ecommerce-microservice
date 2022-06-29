import { GraphQLInt, GraphQLList, GraphQLObjectType } from 'graphql';
import { OrderType } from './GraphQLOrderType.js';
import { fetch, servicesURL } from './service.js';

// const OrderType = new GraphQLOrderType();

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({

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
