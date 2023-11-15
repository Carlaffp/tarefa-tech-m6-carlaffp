import { Request, Response } from "express";
import User from "../entities/users.entity";
import { contactCreateService } from "../services/contact.service";

const createContactController = async(req: Request, res: Response): Promise<Response> =>{
  const user: User = res.locals.foundEntity
  const contact = await contactCreateService(user, req.body)
  return res.status(201).json(contact)
}

export {createContactController}