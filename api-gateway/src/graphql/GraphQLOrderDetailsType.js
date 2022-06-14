// import { CategoryType } from './GraphQLCategoryType';

import { OrderType } from './GraphQLOrderType';
import { ProductType } from './GraphQLProductType';

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull
} = require('graphql');

export const OrderDetailType = new GraphQLObjectType({
  name: 'Order',
  description: 'Order Details type',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    productId: { type: GraphQLNonNull(GraphQLInt) },
    orderId: { type: GraphQLNonNull(GraphQLInt) },
    price: { type: GraphQLNonNull(GraphQLFloat) },
    order: {
      type: OrderType,
      resolve: async (OrderDetail, args) => {
        let data = await serviceData.fetch(ServiceType.ORDER_SERVICE);
        return data.find((order) => order.id === OrderDetail.orderId);
      }
    },
    product: {
      type: ProductType,
      resolve: async (OrderDetail, args) => {
        let data = await serviceData.fetch(ServiceType.ORDER_SERVICE);
        return data.products.find(
          (product) => product.id === OrderDetail.productId
        );
      }
    }
  })
});
