import { Request, Response } from "express";
import User from "../entities/users.entity";
import { contactCreateService, contactDeleteService, contactReadService, contactRetrieveService} from "../services/contact.service";

const createContactController = async(req: Request, res: Response): Promise<Response> =>{
  const {sub} = res.locals.decoded
  const contact = await contactCreateService(sub, req.body)
  return res.status(201).json(contact)
}

  const retrieveContactController = async(req: Request, res:Response):Promise<Response> =>{
    const contactId: number = Number(req.params.id)
    const contact = await contactRetrieveService(contactId)
    return res.status(201).json(contact)
  }

  const readContactController = async(req: Request, res:Response):Promise<Response> =>{
    
    const contact = await contactReadService()
    return res.status(201).json(contact)
  }

  const deleteContactController = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    await contactDeleteService(res.locals.foundContact);
    return res.status(204).json();
  };

export {createContactController, retrieveContactController, readContactController, deleteContactController}