import { object, string } from "zod";

export const SignUpSchema = object({
  name: string().min(1, "Name is required"),
  email: string().email("Invalid Email, ").min(1, "email is required"),
  password: string({
    required_error: "Password is required",
  })
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be less than 32 characters"),
  confirmPassword: string({
    required_error: "Confirm Password is required",
  })
    .min(8, "Password must be at least 8 characters, ")
    .max(32, "Password must be less than 32 characters "),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const SignInSchema = object({
  email: string().email("Invalid Email, ").min(1, "email is required"),
  password: string({
    required_error: "Password is required",
  })
    .min(8, "Password must be at least 8 characters")
});
