function loginFormValidate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email address is required';
    values.password = ""
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email address is invalid';
    values.password = ""
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
    values.password = ""
  }
  else {
    values.password = ""
  }
  return errors;
};

export default loginFormValidate;
