import { Router } from "express";
import { createUserController, deleteUserController, partialUpdateUserController, readUserController } from "../controllers/user.controller";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { userCreateSchema, userUpdateSchema } from "../schemas/user.schema";
import { verifyEmailExist } from "../middlewares/verifyEmailExist.middleware";
import { verifyIdExist } from "../middlewares/verifyIdExist.middleware";

const userRouter: Router = Router();

userRouter.post(
  "",
  validateBodyMiddleware(userCreateSchema),
  verifyEmailExist,
  createUserController
);
userRouter.get(
  "",
  readUserController
)
userRouter.delete(
  "/:id",
  verifyIdExist,
  deleteUserController
)
userRouter.patch(
  "/:id",
  verifyIdExist,
  validateBodyMiddleware(userUpdateSchema),
  verifyEmailExist,
  partialUpdateUserController
)
export { userRouter };
