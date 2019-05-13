import { hashPwd } from '../helpers/hashpwd';
import Jwt from '../helpers/token';
import { signUpData } from '../mock-data';

export default class User {
  static async signUp(req, res, next) {
    try {
      req.body.id = Math.random();
      req.body.isVerified = false;

      if (!req.body.role) {
        req.body.role = 'User';
      }

      const {
        email, role, id, password,
      } = req.body;

      const pwd = await hashPwd(password);

      req.body.password = pwd;
      req.body.token = Jwt.signUser(email, role, id);
      const resData = Object.keys(req.body);

      return res.status(200).json({
        data: resData
          .filter(data => data !== 'password')
          .reduce((acc, key) => {
            acc[key] = req.body[key];
            return acc;
          }, {}),
      });
    } catch (err) {
      console.log(err)
      next(err);
    }
  }

  static async signIn(req, res, next) {
    try {
      const signedInUser = signUpData.find(
        data => data.email === req.body.email && data.password === req.body.password,
      );

      if (!signedInUser) {
        return res.status(404).json({
          error: 'Not found',
          message: 'User not found',
        });
      }

      const {
        email, role, id,
      } = signedInUser;

      signedInUser.token = Jwt.signUser(email, role, id);

      const getFields = Object.keys(signedInUser);

      return res.status(200).json({
        data: getFields
          .filter(data => data !== 'password')
          .reduce((acc, key) => {
            acc[key] = signedInUser[key];
            return acc;
          }, {}),
      });
    } catch (err) {
      console.log(err)
      next(err);
    }
  }

  static async verifyUser(req, res, next) {
    try {
      const { email } = req.params;

      const getUser = signUpData.find(
        data => data.email === email,
      );

      if (!getUser) {
        return res.status(404).json({
          error: 'Not found',
          message: 'User not found',
        });
      }

      getUser.isVerified = true;

      const getFields = Object.keys(getUser);

      return res.status(200).json({
        data: getFields
          .filter(data => data !== 'password')
          .reduce((acc, key) => {
            acc[key] = getUser[key];
            return acc;
          }, {}),
      });
    } catch (err) {
      console.log(err)
      next(err);
    }
  }
}
