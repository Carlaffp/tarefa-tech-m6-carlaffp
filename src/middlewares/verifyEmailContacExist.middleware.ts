import { NextFunction, Request, Response } from "express";
import Contact from "../entities/contacts.entity";
import { contactRepository } from "../repositories";
import AppError from "../error";

const verifyContactEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if(!req.body.email) return next()

  const foundContactEmail : Contact | null = await contactRepository.findOneBy({
    email: req.body.email
  })
  if (foundContactEmail){
    throw new AppError("Email already exist", 409)
  }

  return next();
};

export {
verifyContactEmailExists
}