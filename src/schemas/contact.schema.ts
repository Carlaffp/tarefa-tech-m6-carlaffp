import {z} from "zod";
import { userSchema } from "./user.schema";

const contactSchema = z.object({
  id: z.number().int().positive(),
  fullName: z.string().max(125),
  email: z.string().max(45).email(),
  phone: z.string(),
  createdAt: z.string(),
  user: userSchema,
});

const contactCreateSchema = contactSchema.omit({
  id: true,
  user:true,
});

const contactReadSchema = contactSchema.array();

const contactUpdateSchema = contactCreateSchema.partial()

export {
  contactSchema,
  contactCreateSchema,
  contactReadSchema,
  contactUpdateSchema
}