export const validatePassword = password => {
  return password.length >= 6;
};

export const validateSecondPassword = (password, secondPassword) => {
  return password === secondPassword && password !== '';
};

export const validateName = name => {
  return name !== '';
};

export const validateEmail = email => {
  // eslint-disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validateNumber = number => {
  return Number(number);
};