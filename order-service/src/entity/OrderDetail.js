import typeorm from 'typeorm';
import OrderDetailModel from '../model/OrderDetail.js';

const EntitySchema = typeorm.EntitySchema;

const OrderDetail = new EntitySchema({
  name: 'OrderDetail', // Will use table name `post` as default behaviour.
  tableName: 'order-details', // Optional: Provide `tableName` property to override the default behaviour for table name.
  target: OrderDetailModel,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    productId: {
      type: 'int',
      required: true,
    },
    orderId: {
      type: 'int',
      required: false,
    },
    price: {
      type: 'float',
    },
    quantity: {
      type: 'int',
      required: true,
    },
  },
});

export default OrderDetail;
