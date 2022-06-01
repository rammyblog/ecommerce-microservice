import typeorm from 'typeorm';

const EntitySchema = typeorm.EntitySchema;

const OrderEntity = new EntitySchema({
  name: 'Order', // Will use table name `post` as default behaviour.
  tableName: 'orders', // Optional: Provide `tableName` property to override the default behaviour for table name.
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    customerId: {
      type: 'int',
      required: true,
    },
    orderTimestamp: {
      type: 'timestamptz',
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
    email: {
      type: 'text',
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
      target: 'OrderDetail',
      type: 'many-to-many',
      joinTable: true,
      cascade: true,
    },
  },
});

export default OrderEntity;
