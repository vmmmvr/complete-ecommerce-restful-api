import { string } from "yup";
import { object } from "yup";

export const createCustomerSchema = object({
  body: object({
    username: string().required("Customer Name is required"),
    password: string().required("Password is required"),
    email: string()
      .email("Must be a valid email")
      .required("Email is required"),
  }),
});
