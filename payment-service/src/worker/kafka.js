import { Kafka, logLevel } from 'kafkajs';

const host = process.env.KAFKA_ADVERTISED_HOST_NAME || '127.0.0.1';

const kafka = new Kafka({
  clientId: 'ms-payment-service',
  logLevel: logLevel.DEBUG,
  brokers: [`${host}:9092`],
});

export default kafka;
