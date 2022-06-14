import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const servicesURL = {
  ORDER_SERVICE: 'http://localhost:3000/api/orders/',
  CATEGORY_SERVICE: 'http://localhost:3001/api/products/categories',
  PRODUCT_SERVICE: 'http://localhost:3001/api/product',
  USER_SERVICE: 'http://localhost:3000/api/users/'
};

export const fetch = async (serviceName, params) => {
  console.log(serviceName);
  const response = await axios.get(serviceName, { params });
  return response.data;
};
