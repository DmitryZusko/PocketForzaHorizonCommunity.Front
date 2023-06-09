import * as Yup from "yup";

export const validationScheme = Yup.object({
  email: Yup.string().email("Please, enter a valid email").required("Please, enter your email"),
});
