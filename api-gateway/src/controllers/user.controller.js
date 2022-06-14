import User from '../models/User.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json({ user: users });
  } catch (err) {
    return res.status(400).json({ error_msg: err.message });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    return res.status(200).json({ user: user });
  } catch (err) {
    return res.status(400).json({ error_msg: err.message });
  }
};
