import jwt from 'jsonwebtoken';

export function ensureAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (error) {
    return res.status(400).json({ error_msg: 'invalid token' });
  }
}
