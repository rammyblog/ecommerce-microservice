import kafka from './kafka.js';

const kafkaProducer = async (topic, messages) => {
  const producer = kafka.producer();
  await producer.connect();
  await producer.send({
    topic,
    messages: Array(messages),
  });

  await producer.disconnect();
};

export default kafkaProducer;
