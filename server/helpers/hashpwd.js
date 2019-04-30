import bcrypt from 'bcryptjs';

const hashPwd = async (pwd) => {
  try {
    const SALT_ROUNDS = 10;
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    return await bcrypt.hash(pwd, salt);
  } catch (err) {
    throw new Error(err);
  }
};

const comparePwd = async (pwd, hshPwd) => {
  try {
    return await bcrypt.compare(pwd, hshPwd);
  } catch (err) {
    throw new Error(err);
  }
};

export { hashPwd, comparePwd };
