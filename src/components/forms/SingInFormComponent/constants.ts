import * as Yup from "yup";

export const validationScheme = Yup.object({
  email: Yup.string()
    .email("Please, enter a valid email")
    .max(255, "Email length shouldn't exceed 255 characters")
    .required("Please, enter your email"),
  password: Yup.string()
    .min(8, "Password should be at least 8 characters long")
    .max(64, "Password length shouldn't exceed 64 characters")
    .matches(/[0-9]/g, "Password should contain a number")
    .matches(/[a-z]/g, "Password should contain a lowercase letter")
    .matches(/[A-Z]/g, "Password should contain an uppercase letter")
    .matches(/\W/g, "Password should contain a symbol")
    .matches(/^\S*$/g, "Password shouldn't contain whitespaces")
    .required("Please, enter a password"),
});
