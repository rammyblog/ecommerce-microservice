import AppDataSource from '../config/datasource.js';
import OrderDetailModel from '../model/OrderDetail.js';
var orderDetailRepo = AppDataSource.getRepository('OrderDetail');
const orderDetailModelRepo = AppDataSource.getRepository('OrderDetailModel');
const OrderDetailService = {
  init: () => {
    return new OrderDetailModel();
  },
  getAll: () => {
    return orderDetailModelRepo.find();
  },
  getById: (id) => {
    return orderDetailModelRepo.findBy({ id });
  },
  getByOrderID: (id) => {
    return orderDetailModelRepo.findBy({
      orderId: id,
    });
  },
  create: (order) => {
    return orderDetailRepo.manager.save(order);
  },
  update: (order) => {
    return orderDetailRepo.manager.save(order);
  },
  remove: (order) => {
    return orderDetailRepo.manager.remove(order);
  },
};

export default OrderDetailService;
