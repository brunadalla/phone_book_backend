import { Router } from "express"

import createContactController from "../controllers/contacts/createUser.controller"
import deleteContactController from "../controllers/contacts/deleteUser.controller"
import listContactsByUserController from "../controllers/contacts/listContactsByUser.controller"
import listOneContactController from "../controllers/contacts/listOneUser.controller"
import updateContactController from "../controllers/contacts/updateUser.controller"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"

const routes = Router()

export const contactsRouter = () => {
  routes.post("/", ensureAuthMiddleware, createContactController)
  routes.get("/", ensureAuthMiddleware, listContactsByUserController)
  routes.get("/:id", ensureAuthMiddleware, listOneContactController)
  routes.patch("/:id", ensureAuthMiddleware, updateContactController)
  routes.delete("/:id", ensureAuthMiddleware, deleteContactController)

  return routes
}
