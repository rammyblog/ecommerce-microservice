import jwt from 'jsonwebtoken';
import ErrorResponse from "../utils/error.js"


export default function ensureAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    req.user = jwt.verify(token, process.env.TOKEN_SECRET);
    next();
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse(error.message, 400));
  }
}
