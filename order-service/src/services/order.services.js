import AppDataSource from '../config/datasource.js';
import OrderModel from '../model/Order.js';
const  orderRepo = AppDataSource.getRepository('Order');
const orderModelRepo = AppDataSource.getRepository('OrderModel');
const OrderService = {
  init: () => {
    return new OrderModel();
  },
  getAll: () => {
    return orderModelRepo.find();
  },
  getById: (id) => {
    return orderModelRepo.findBy({ id });
  },
  getByUserId: (userId) => {
    return orderModelRepo.findBy({
      userId,
    });
  },
  create: (order) => {
    return orderRepo.manager.save(order);
  },
  update: (order) => {
    return orderRepo.manager.save(order);
  },
};

export default OrderService;
