import z from "zod";

export const restpasswordformSchema = z.object({
    email: z.string().email("Enter a valid email address"),
});
