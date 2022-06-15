import AppDataSource from '../config/datasource.js';
import OrderModel from '../model/transaction.model.js';
const transactionRepo = AppDataSource.getRepository('Transaction');
const transactionModelRepo = AppDataSource.getRepository('TransactionModel');

const TransactionService = {
  init: () => {
    return new OrderModel();
  },
  getAll: () => {
    return transactionModelRepo.find();
  },
  getById: (id) => {
    return transactionModelRepo.findOne(id);
  },
  getByUserId: (userId) => {
    return transactionModelRepo.findBy({
      userId,
    });
  },
  getByReference: (reference) => {
    return transactionModelRepo.findBy({
      reference,
    });
  },
  getByOrderId: (orderId) => {
    return transactionModelRepo.findBy({
      orderId,
    });
  },
  create: (transaction) => {
    return transactionRepo.manager.save(transaction);
  },
  update: (transaction) => {
    return transactionRepo.manager.save(transaction);
  },
};

export default TransactionService;
