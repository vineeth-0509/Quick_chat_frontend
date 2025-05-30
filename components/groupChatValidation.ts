import { z } from "zod";
export const createChatSchema = z.object({
  title: z
    .string()
    .min(4, { message: "Title must be 4 characters long" })
    .max(191, { message: "title must be less than 191 characters" }),
  passcode: z
    .string()
    .min(4, { message: "Passcode must be 4 characters long" })
    .max(50, { message: "Passcode must be less than 50 characters" }),
}).required();

export type createChatSchemaType = z.infer<typeof createChatSchema>
