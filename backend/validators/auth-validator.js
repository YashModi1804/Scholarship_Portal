import {z} from "zod";

export const loginSchema = z.object({
    username: z
        .string({required_error:"Username is required"})
        .trim()
        .min(3, { message : "Username must be at least of 3 characters."})
        .max(10, {message: "Username must not be more than 10 characters"}),
    password: z
        .string({required_error:"Password is required"})
        .trim()
        .min(6, { message : "Password must be at least of 6 characters."})
        .max(1024, {message: "Password must not be more than 1024 characters"}),
});

export const signupSchema = z.object({
    name: z
        .string({required_error:"Name is required"})
        .trim()
        .min(3, { message : "Name must be at least of 3 characters."})
        .max(255, {message: "Name must not be more than 255 characters"}),
    enrollment: z
        .string({ required_error: "Enrollment number is required" })
        .trim()
        .min(13, { message : "Enrollment must be at least of 13 characters."})
        .max(13, {message: "Enrollment must not be more than 13 characters"}),
    username: z
        .string({required_error:"Username is required"})
        .trim()
        .min(3, { message : "Username must be at least of 3 characters."})
        .max(10, {message: "Username must not be more than 10 characters"}),
    password: z
        .string({required_error:"Password is required"})
        .trim()
        .min(6, { message : "Password must be at least of 6 characters."})
        .max(1024, {message: "Password must not be more than 1024 characters"}),
});

// export default {signupSchema, loginSchema};