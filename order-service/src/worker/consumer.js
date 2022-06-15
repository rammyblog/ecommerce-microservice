import kafka from './kafka.js';

const kafkaConsumer = async (topic) => {
  const consumer = kafka.consumer({ groupId: 'test-group' });
  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.toString(),
      });
    },
  });
};

export default kafkaConsumer;
