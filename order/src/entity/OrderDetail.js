import typeorm from 'typeorm';

const EntitySchema = typeorm.EntitySchema;

const OrderDetail = new EntitySchema({
  name: 'OrderDetail', // Will use table name `post` as default behaviour.
  tableName: 'order-details', // Optional: Provide `tableName` property to override the default behaviour for table name.
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
      type: 'date',
      required: true,
    },
    price: {
      type: 'boolean',
      default: false,
    },
  },
});

export default OrderDetail;
