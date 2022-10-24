import { Kafka, logLevel } from 'kafkajs';

import ip from 'ip';

// const host = process.env.HOST_IP || ip.address();
const host = 'localhost';

const kafka = new Kafka({
  clientId: 'ms-order-service',

  logLevel: logLevel.DEBUG,
  brokers: [`${host}:29092`],
});

export default kafka;
