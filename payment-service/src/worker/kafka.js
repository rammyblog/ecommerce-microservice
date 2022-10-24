import { Kafka, logLevel } from 'kafkajs';

const host = 'kafka';


const kafka = new Kafka({
  clientId: 'ms-payment-service',
  logLevel: logLevel.DEBUG,
  brokers: [`${host}:9092`],
});

export default kafka;
