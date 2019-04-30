const signUpGood = {
  firstName: 'Zabuza',
  lastName: 'Momochi',
  email: 'Momochi@gmail.com',
  password: 'waterrealease',
  occupation: 'Ninja',
  address: '19, flood street rd., Hidden Mist',
  phoneNumber: '08077998844',
  age: 21,
  nationality: 'Japanese',
  gender: 'male',
};

const signUpBad = {
  firstName: 'Zabuza',
  lastName: 'Momochi',
  email: 'Momochi@gmail.com',
  password: 'waterrealease',
  occupation: 'Ninja',
  address: '19, flood street rd., Hidden Mist',
  phoneNumber: '08077998844',
  age: 21,
  nationality: 'Japanese',
  gender: 'males',
};

const signInGood = {
  email: 'Momochi@gmail.com',
  password: 'waterrealease',
};

const signInNoUser = {
  email: 'Momochi@gmail.com',
  password: 'waterrealeases',
};

const signInBadRequest = {
  email: 'Momochi@gmail',
  password: 'waterrealease',
};

export {
  signUpGood,
  signUpBad,
  signInGood,
  signInNoUser,
  signInBadRequest,
};
