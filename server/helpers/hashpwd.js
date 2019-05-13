import crypto from 'crypto'

const salt = crypto.randomBytes(16).toString('hex');

const hashPwd = async (pwd) => {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(pwd, salt, 100000, 64, 'sha512', (err, derivedKey) => {
      const key = derivedKey.toString('hex')
      resolve(key)
      if (err) reject(err)
    });
  })
};

const comparePwd = async (pwd, hshedPwd) => {
  return new Promise((resolve, reject) => {
    try {
      const hash = crypto.pbkdf2Sync(pwd, salt, 100000, 64, 'sha512').toString('hex');
      resolve(hash === hshedPwd)
    } catch (err) {
      console.log(err)
      throw new Error(err);
    }
  })
};

export { hashPwd, comparePwd };
