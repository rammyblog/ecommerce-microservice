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
    return transactionModelRepo.findOneBy(id);
  },
  getByUserId: (userId) => {
    return transactionModelRepo.findOneBy({
      userId,
    });
  },
  getByReference: (reference) => {
    return transactionModelRepo.findOneBy({
      reference,
    });
  },
  getByOrderId: (orderId) => {
    return transactionModelRepo.findOneBy({
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
