import * as Yup from "yup";

export const validationScheme = Yup.object({
  email: Yup.string()
    .email("Please, enter a valid email")
    .max(255, "Email length shouldn't exceed 255 characters")
    .required("Please, enter your email"),
  password: Yup.string().required("Please, enter a password"),
});
