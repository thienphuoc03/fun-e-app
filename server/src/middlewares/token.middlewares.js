import jsonwebtoken from 'jsonwebtoken';
import responseHandler from '../handlers/response.handler.js';

const tokenMiddleware = allowedRoles => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
      return responseHandler.unauthorize(
        res,
        'Authorization header missing!!!'
      );

    const token = authHeader.split(' ')[1];

    try {
      const decodedToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);

      req.user = decodedToken;

      if (!allowedRoles.includes(decodedToken.userRole))
        return responseHandler.forbidden(res);

      next();
    } catch (error) {
      responseHandler.unauthorize(res, 'Invalid token!!!');
    }
  };
};

export default tokenMiddleware;
