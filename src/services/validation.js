import toast from 'react-hot-toast';

export const validateData = data => {
  const { name, email, password } = data;
  const isNameCorrect = name.length > 1 ? true : false;
  const isEmailCorrect = email.includes('@');
  const isPasswordCorrect = password.length >= 6 ? true : false;

  if (!isNameCorrect) {
    toast.error(`The name must be at least 1 character long.`);
  }

  if (!isEmailCorrect) {
    toast.error(`Incorrect email.`);
  }

  if (!isPasswordCorrect) {
    toast.error(`The password must be at least 6 characters long.`);
  }

  return isNameCorrect && isPasswordCorrect && isEmailCorrect;
};
