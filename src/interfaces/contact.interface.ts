import {z } from "zod";
import { contactCreateSchema, contactReadSchema, contactReturnSchema, contactSchema, contactUpdateSchema } from "../schemas/contact.schema";
import { Repository } from "typeorm";
import Contact from "../entities/contacts.entity";

type ContactCreat = z.infer<typeof contactCreateSchema>;
type ContactRead = z.infer<typeof contactReadSchema>;
type ContactUpdate = z.infer<typeof contactUpdateSchema>
type ContactReturn = z.infer<typeof contactReturnSchema>

type ContactRepo = Repository<Contact>

export {
  ContactCreat, ContactRead, ContactUpdate, ContactRepo, ContactReturn
}