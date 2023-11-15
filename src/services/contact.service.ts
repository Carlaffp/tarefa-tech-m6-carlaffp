import Contact from "../entities/contacts.entity";
import User from "../entities/users.entity";
import { ContactCreat, ContactReturn } from "../interfaces/contact.interface";
import { contactRepository } from "../repositories";
import { contactSchema } from "../schemas/contact.schema";

  const contactCreateService = async(user: User, payload:ContactCreat): Promise<ContactReturn> =>{
    const contact: Contact = contactRepository.create({user, ...payload})
    await contactRepository.save(contact)
    return contactSchema.parse(contact)
  }

  export {contactCreateService}