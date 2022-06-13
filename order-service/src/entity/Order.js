import typeorm from 'typeorm';
import OrderModel from '../model/Order.js';

const EntitySchema = typeorm.EntitySchema;

const OrderEntity = new EntitySchema({
  name: 'Order', // Will use table name `post` as default behaviour.
  tableName: 'orders', // Optional: Provide `tableName` property to override the default behaviour for table name.
  target: OrderModel,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    userId: {
      type: 'int',
      required: true,
    },
    paid: {
      type: 'boolean',
      default: false,
    },
    address: {
      type: 'varchar',
      required: false,
    },
    phoneNumber: {
      type: 'varchar',
      required: false,
    },
    amount: {
      type: 'float',
      required: true,
    },
    status: {
      type: 'text',
      nullable: false,
      enum: ['pending', 'cancelled', 'successful'],
      default: 'pending',
    },
    reference: {
      type: 'text',
      required: false,
      nullable: true,
    },
    created_at: {
      type: 'timestamptz',
      default: () => 'CURRENT_TIMESTAMP',
    },
    updated_at: {
      type: 'timestamptz',
      default: () => 'CURRENT_TIMESTAMP',
    },
  },
  relations: {
    order_details: {
      target: 'OrderDetailModel',
      type: 'many-to-many',
      joinTable: true,
      cascade: true,
    },
  },
});

export default OrderEntity;
