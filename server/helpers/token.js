import jwt from 'jsonwebtoken';

/*
* Signing a Token. If the role is true,
* it assigns an Admin role,
* Else a user role
*/
export default class Jwt {
  static signUser(email, role, id) {
    return jwt.sign({
      iss: process.env.ISSUER,
      sub: email,
      iat: new Date().getTime(),
      expiresIn: new Date().setDate(new Date().getDate() + 10),
      role: role ? 'Admin' : 'User',
      id,
    }, process.env.JWT_TOKEN_SECRET);
  }
}
