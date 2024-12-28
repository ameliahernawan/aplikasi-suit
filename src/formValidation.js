export const validateUsername = (username) => {
  if (username.length <= 3) {
    return 'Username must be more than 3 characters.';
  }
  return '';
};

export const validateEmail = (email) => {
  if (!email.includes('@')) {
    return 'Email must contain "@" symbol.';
  }
  return '';
};

export const validatePassword = (password) => {
  if (password.length < 7) {
    return 'Password must be at least 7 characters long.';
  }
  return '';
};

export const validateForm = (username, email, password) => {
  const errors = {
    usernameErrorMessage: validateUsername(username),
    emailErrorMessage: validateEmail(email),
    passwordErrorMessage: validatePassword(password),
    isValid: false,
  };

  errors.isValid = !errors.usernameErrorMessage && !errors.emailErrorMessage && !errors.passwordErrorMessage;

  return errors;
};
