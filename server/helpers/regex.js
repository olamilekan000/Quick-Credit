
const regex = {
  firstName: /^[a-zA-Z]+$/,
  lastName: /^[a-zA-Z]+$/,
  email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
  password: /^[^@_]{6,}$/,
  occupation: /^[a-zA-Z\s]+$/,
  address: /^[a-zA-Z\s,0-9.]+$/,
  phoneNumber: /^((080|090|070)[^0124][0-9]{7}|01[\d]{7})$/,
  age: /^[\w]{2}$/,
  nationality: /^[a-zA-Z]+$/,
  gender: /^(male|female)$/,
  role: /^[a-zA-Z]+$/,
  isVerified: /^(true|false)$/,
};

export default regex;
