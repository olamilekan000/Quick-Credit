import { hashPwd } from '../helpers/hashpwd';
import jwt from '../helpers/token';
import { signInData } from '../mock-data';

export default class User {
  static async signUp(req, res, next) {
    req.body.id = Math.random();
    const {
      email, role, id, password,
    } = req.body;

    await hashPwd(password);

    req.body.token = jwt.signUser(email, role, id);
    const resData = Object.keys(req.body);

    return res.status(200).json({
      data: resData
        .filter(data => data !== 'password')
        .reduce((acc, key) => {
          acc[key] = req.body[key];
          return acc;
        }, {}),
    });

    next();
  }

  static async signIn(req, res, next) {
    const signedInUser = signInData.find(data => data.email === req.body.email && data.password === req.body.password);

    if (!signedInUser) {
      return res.status(404).json({
        error: 'Not found',
        message: 'User not found',
      });
    }

    const {
      email, role, id,
    } = signedInUser;

    signedInUser.token = jwt.signUser(email, role, id);

    const getFields = Object.keys(signedInUser);

    return res.status(200).json({
      data: getFields
        .filter(data => data !== 'password')
        .reduce((acc, key) => {
          acc[key] = signedInUser[key];
          return acc;
        }, {}),
    });

    next();
  }
}
