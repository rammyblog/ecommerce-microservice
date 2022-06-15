import typeorm from 'typeorm';
import TransactionModel from '../model/transaction.model.js';

const EntitySchema = typeorm.EntitySchema;

const TransactionEntity = new EntitySchema({
  name: 'Transaction', // Will use table name `post` as default behaviour.
  tableName: 'transactions', // Optional: Provide `tableName` property to override the default behaviour for table name.
  target: TransactionModel,
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
    orderId: {
      type: 'int',
      required: true,
    },
    paid: {
      type: 'boolean',
      default: false,
    },
    amount: {
      type: 'float',
      required: true,
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
});

export default TransactionEntity;
