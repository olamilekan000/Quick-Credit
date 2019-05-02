import jwt from 'jsonwebtoken';

export const checkIfAdmin = (req, res, next) => {
  try {
    const tokenFromHeader = req.get('Authorization');
    const verify = jwt.verify(tokenFromHeader, process.env.JWT_TOKEN_SECRET);

    if (verify.role !== 'Admin') {
      res.status(401).json({
        error: 'Authorization Error',
        message: 'You do not have the access to perform this action',
      });
      return;
    }
    next();
  } catch (e) {
    res.status(500).json({
      error: 'Internal server error',
      message: 'Error resolving token',
    });
  }
};

export const checkIfUserOrAdmin = (req, res, next) => {
  try {
    const tokenFromHeader = req.get('Authorization');
    const verify = jwt.verify(tokenFromHeader, process.env.JWT_TOKEN_SECRET);

    if (verify.role === 'user' || verify.role === 'Admin') {
      next();
    } else {
      res.status(401).json({
        error: 'You do not have the access to this resource.',
      });
    }
  } catch (e) {
    res.status(500).json({
      error: 'You do not have the access to perform this action',
    });
  }
};
