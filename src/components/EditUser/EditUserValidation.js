export default function EditUserValidate(values, validEmail) {

  let errors = {};
  if (!values.name) {
    errors.name = 'Firstname is required';
  }
  if (!values.last_name) {
    errors.last_name = 'Lastname is required';
  }
  if (!values.email) {
    errors.email = 'Email address is required';
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  else if (validEmail === 1) {
    errors.email = 'Email is taken';
  }
  if (!values.phone) {
    errors.phone = 'Phone number is required';
  }
  else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(values.phone)) {
    errors.phone = 'Phone number is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm Password is required';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Confirm password is Not Matched with password';
  } else {
    // setValues(" ")
    // uploadedImage.current.src = " ";
    // setShowEdit(false);
    // notify();
    // window.location.reload();
  }
  return errors;
};
