import * as Yup from "yup";

export const registrationValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .required("Required")
    .matches(
      /^\+[1-9]\d{6,14}$/,
      "The 'Phone' field must be in the format of a phone number"
    ),
  password: Yup.string()
    .required("Required")
    .min(12, "Password must contain at least 12 characters")
    .matches(
      /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])\S+$/,

      "The password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
  passwordSubmit: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  termsAndConditions: Yup.bool().oneOf(
    [true],
    "Required"
  ),
});