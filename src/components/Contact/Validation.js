export default function Validation(userData) {
  const errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

  //fullName
  if (!userData.fullName) {
    errors.fullName = "Username is required";
  } else if (userData.fullName.length < 5) {
    errors.fullName = "Username must be more than 5 characters";
  }

  //address
  if (!userData.address) {
    errors.address = "Address is required";
  }

  //email
  if (!userData.email) {
    errors.email = "Email is required";
  } else if (!email_pattern.test(userData.email)) {
    errors.email = "Please enter valid email";
  }

  if (!userData.message) {
    errors.message = "Please fill out this field";
  }
  // return Object.keys(errors).length > 0 ? errors : {};

  if (!userData.password) {
    errors.password = "Password is required";
  } else if (userData.password < 5) {
    errors.password = "Password should be more than 5 characters";
  } else if (userData.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  } else if (!/[A-Z]/.test(userData.password)) {
    errors.password = "Password should contain at least one uppercase letter";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(userData.password)) {
    errors.password = "Password should contain at least one special character";
  }

  if (!userData.confirmpassword) {
    errors.confirmpassword = "Password is required";
  } else if (userData.password !== userData.confirmpassword) {
    errors.confirmpassword = "Please reenter the password";
  }
  return errors;
}
