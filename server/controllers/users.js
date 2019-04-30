import { hashPwd } from '../helpers/hashpwd';
import jwt from '../helpers/token';

export default class User {
  static async signUp(req, res, next) {
    req.body.id = Math.random();
    const {
      email, role, id, password,
    } = req.body;

    await hashPwd(password);

    req.body.token = jwt.signUser(email, role, id);
    const resData = Object.keys(req.body);

    res.status(200).json({
      data: resData
        .filter(data => data !== 'password')
        .reduce((acc, key) => {
          acc[key] = req.body[key];
          return acc;
        }, {}),
    });
  }
}
