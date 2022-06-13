import AppDataSource from '../config/datasource.js';
import Order from '../entity/Order.js';
import OrderModel from '../model/Order.js';
var orderRepo = AppDataSource.getRepository('Order');
const OrderService = {
  init: () => {
    return new OrderModel();
  },
  getAll: () => {
    return orderRepo.manager.find(Order);
  },
  getById: (id) => {
    return orderRepo.manager.findOne(Order, id);
  },
  create: (order) => {
    return orderRepo.manager.save(order);
  },
  update: (order) => {
    return orderRepo.manager.save(order);
  },
};

export default OrderService;
