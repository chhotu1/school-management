import Regex from "./Regex";
const Forms = {
  validateForm: (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map((x) => {
      let refValue = null;
      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  },

  registerForm: (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "Email is Required";
        else if (!Regex.EMAIL_REGEXP.test(value))
          return "Enter a valid email address";
        else return "";
      case "password":
        if (!value) return "Password is Required";
        else if (!Regex.PASSWORD_REGEX.test(value))
          return "Please fill at least 6 character";
        else return "";
      default:
        return "";
    }
  },
  loginForm: (name, value) => {
    switch (name) {
      case "email":
        if (!value) return "Email is Required";
        else if (!Regex.EMAIL_REGEXP.test(value))
          return "Enter a valid email address";
        else return "";
      case "password":
        if (!value) return "Password is Required";
        else if (!Regex.PASSWORD_REGEX.test(value))
          return "Please fill at least 6 character";
        else return "";
      default:
        return "";
    }
  },

  changePasswordForm: (name, value) => {
    switch (name) {
      case "currentPassword":
        if (!value) return "current Password is Required";
        else if (!Regex.PASSWORD_REGEX.test(value))
          return "Please fill at least 6 character";
        else return "";
      case "confirmPassword":
        if (!value) return "confirm Password is Required";
        else if (!Regex.PASSWORD_REGEX.test(value))
          return "Please fill at least 6 character";
        else return "";
      case "password":
        if (!value) return "Password is Required";
        else if (!Regex.PASSWORD_REGEX.test(value))
          return "Please fill at least 6 character";
        else return "";
      default:
        return "";
    }
  },
};
export default Forms;
