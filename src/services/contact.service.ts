import Contact from "../entities/contacts.entity";
import User from "../entities/users.entity";
import AppError from "../error";
import { ContactCreat, ContactRead, ContactReturn } from "../interfaces/contact.interface";
import { contactRepository, userRepository } from "../repositories";
import { contactSchema, contactReturnSchema, contactReadSchema } from "../schemas/contact.schema";

  const contactCreateService = async(userId: number, payload:ContactCreat): Promise<ContactReturn> =>{
    const user: User | null = await userRepository.findOneBy({id: userId})
    if(!user) {
      throw new AppError("user not found")
    }
    const contact: Contact = contactRepository.create({user, ...payload})
    await contactRepository.save(contact)
    return contactSchema.parse(contact)
  }

 const contactRetrieveService = async(contactId:number):Promise<ContactReturn> =>{
  const contact = await contactRepository.findOne({
    where:{
      id: contactId
    },
    relations: {
      user: true
    }
    
  })
  if(!contact) throw new AppError("Contact not found", 404)

  return contactReturnSchema.parse(contact)

 }

 const contactReadService = async():Promise<ContactReturn[]> =>{
  const conatcts = await contactRepository.find({
    relations: {
      user: true
    }
  })
  return contactReturnSchema.array().parse(conatcts)
 }

 const contactDeleteService = async(contact: Contact): Promise<void> =>{
  await contactRepository.remove(contact)

 }

  export {contactCreateService, contactRetrieveService, contactReadService, contactDeleteService}