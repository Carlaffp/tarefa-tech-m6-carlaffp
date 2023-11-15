import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { contactCreateSchema } from "../schemas/contact.schema";
import { createContactController } from "../controllers/contact.controller";

const contactRouter: Router = Router()

contactRouter.post(
  "",
  validateBodyMiddleware(contactCreateSchema),
  createContactController
)