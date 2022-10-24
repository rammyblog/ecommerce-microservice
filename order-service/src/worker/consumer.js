import kafka from './kafka.js';
import OrderService from '../services/order.services.js';

const kafkaConsumer = async (topic) => {
  const consumer = kafka.consumer({ groupId: 'test-group' });
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      // console.log({
      //   value: message.value.toString(),
      // });
      const { orderId, status, reference } = JSON.parse(
        message.value.toString()
      );
      console.log({ orderId, status }, 'this is real life');
      const order = await OrderService.getById(orderId);
      const updateValues = {
        paid: true,
        status,
        reference,
      };
      await OrderService.update(order.id, updateValues);
    },
  });
};

export default kafkaConsumer;
