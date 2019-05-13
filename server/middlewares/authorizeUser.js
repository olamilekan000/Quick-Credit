import jwt from 'jsonwebtoken';

export const checkIfAdmin = (req, res, next) => {
  try {
    const tokenFromHeader = req.get('Authorization');
    const verify = jwt.verify(tokenFromHeader, process.env.JWT_TOKEN_SECRET);

    if (verify.role !== 'Admin') {
      return res.status(401).json({
        error: 'Authorization Error',
        message: 'You do not have the access to perform this action',
      });
      return;
    }
    next();
  } catch (e) {
    return res.status(500).json({
      error: 'Internal server error',
      message: 'Error resolving token',
    });
  }
};

export const checkIfUserOrAdmin = (req, res, next) => {
  try {
    const tokenFromHeader = req.get('Authorization');
    const verify = jwt.verify(tokenFromHeader, process.env.JWT_TOKEN_SECRET);

    if (verify.role === 'User' || verify.role === 'Admin') {
      next();
    } else {
      return res.status(401).json({
        error: 'Unauthorized User',
        message: 'You do not have the access to this resource.'
      });
    }
  } catch (e) {
    return res.status(500).json({
      error: 'Internal Server error',
      message: 'It seems like you do not have the access to perform this action'
    });
  }
};
