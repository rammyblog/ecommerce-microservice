import AppDataSource from '../config/datasource.js';
import Order from '../entity/Order.js';
import OrderModel from '../model/Order.js';
var orderRepo = AppDataSource.getRepository('Order');
const orderModelRepo = AppDataSource.getRepository('OrderModel');
const OrderService = {
  init: () => {
    return new OrderModel();
  },
  getAll: () => {
    console.log(orderRepo);
    return orderModelRepo.find();
  },
  getById: (id) => {
    return orderModelRepo.findOne(id);
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
