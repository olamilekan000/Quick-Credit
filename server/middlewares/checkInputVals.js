import regex from '../helpers/regex';

const checkVals = (req, res, next) => {
  const keys = Object.keys(req.body);

  const keyValues = keys.reduce((acc, curVal, curIndex) => {
    acc[curIndex] = req.body[curVal];
    return acc;
  }, []);

  for (let i = 0; i < keys.length; i += 1) {
    if (!regex[keys[i]].test(keyValues[i])) {
      return res.status(400).json({
        error: 'Bad request',
        message: 'Bad input format',
      });
    }
  }

  next();
};

export { checkVals };
