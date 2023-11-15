import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { contactCreateSchema } from "../schemas/contact.schema";
import { createContactController, deleteContactController, readContactController, retrieveContactController} from "../controllers/contact.controller";
import { verifyToken } from "../middlewares/verifyTokenMiddleware";
import { verifyUserPermission } from "../middlewares/verifyUserPermission.middleware";
import { verifyIdExist } from "../middlewares/verifyIdExist.middleware";
import { verifyContactEmailExists } from "../middlewares/verifyEmailContacExist.middleware";
import { verifyIdContactExist } from "../middlewares/verifyIdContactExixt.middleware";


const contactRouter: Router = Router()

contactRouter.post(
  "",
  verifyToken,
  validateBodyMiddleware(contactCreateSchema),
  verifyContactEmailExists,
  createContactController
)

contactRouter.get(
  "",
  readContactController
)
contactRouter.get(
  "/:id",
  verifyIdContactExist,
  retrieveContactController
)

contactRouter.delete(
  "/:id",
  verifyIdContactExist,
  deleteContactController
)

export {contactRouter}