import User from '../models/User.js';

const getUser = async (query) => {
  try {
    const user = await User.findOne(query);
    if (!user) {
      throw Error('User not found or not active');
    }

    return user;
  } catch (err) {
    throw Error(err);
  }
};

export default getUser;
