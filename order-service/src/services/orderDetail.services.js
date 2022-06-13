import AppDataSource from '../config/datasource.js';
import OrderDetail from '../entity/OrderDetail.js';
import OrderDetailModel from '../model/OrderDetail.js';
var orderDetailRepo = AppDataSource.getRepository('OrderDetail');

const OrderDetailService = {
  init: () => {
    return new OrderDetailModel();
  },
  getAll: () => {
    return AppDataSource.manager.find(OrderDetail);
  },
  getById: (id) => {
    return AppDataSource.manager.findOne(OrderDetail, id);
  },
  getByOrderID: (id) => {
    return AppDataSource.manager.findBy(OrderDetail, {
      orderId: id,
    });
  },
  create: (order) => {
    return AppDataSource.manager.save(order);
  },
  update: (order) => {
    return orderDetailRepo.manager.save(order);
  },
  remove: (order) => {
    return orderDetailRepo.manager.remove(order);
  },
};

export default OrderDetailService;
