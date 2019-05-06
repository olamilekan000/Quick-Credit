import jwt from 'jsonwebtoken';

/*
* Signing a Token. If the role is true,
* it assigns an Admin role,
* Else a user role
*/
export default class Jwt {
  static signUser(email, role, id) {
    let userRole = ''

    if (role === 'Admin') {
      userRole = 'Admin'
    }else if (role === 'User') {
      userRole = 'User'
    }else {
      userRole = 'unauthorised'
    }

    return jwt.sign({
      iss: process.env.ISSUER,
      sub: email,
      iat: new Date().getTime(),
      expiresIn: new Date().setDate(new Date().getDate() + 10),
      role: userRole,
      id,
    }, process.env.JWT_TOKEN_SECRET);
  }
}
