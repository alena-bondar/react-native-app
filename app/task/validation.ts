import { z } from "zod";

export const initialValuesTask = {
  title: "",
  description: "",
};

export const taskSchema = z.object({
  title: z
    .string()
    .min(5, "Must be 5 or more characters long")
    .max(15, "Must be less than 15 characters"),
  description: z
    .string()
    .min(8, "Description must be at least 8 characters")
    .max(50, "Description must be less than 50 characters"),
});

export type FormData = z.infer<typeof taskSchema>;
