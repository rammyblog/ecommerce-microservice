import { Kafka, logLevel } from 'kafkajs';

import ip from 'ip';

// const host = process.env.HOST_IP || ip.address();
const host = 'kafka';

const kafka = new Kafka({
  clientId: 'ms-order-service',

  logLevel: logLevel.DEBUG,
  brokers: [`${host}:9092`],
});

export default kafka;
