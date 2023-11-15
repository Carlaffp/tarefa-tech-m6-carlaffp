import {z } from "zod";
import { contactCreateSchema, contactReadSchema, contactSchema, contactUpdateSchema } from "../schemas/contact.schema";
import { Repository } from "typeorm";
import Contact from "../entities/contacts.entity";

type ContactCreat = z.infer<typeof contactCreateSchema>;
type ContactRead = z.infer<typeof contactReadSchema>;
type ContactUpdate = z.infer<typeof contactUpdateSchema>
type ContactReturn = z.infer<typeof contactSchema>

type ContactRepo = Repository<Contact>

export {
  ContactCreat, ContactRead, ContactUpdate, ContactRepo, ContactReturn
}