import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities/contact.entity"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

const deleteContactService = async (
  idUser: string,
  idContact: string
): Promise<void> => {
  const contactRepository = AppDataSource.getRepository(Contact)
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({
    where: {
      id: idUser,
    },
    relations: {
      contacts: true,
    },
  })

  const contact = user?.contacts.find(contact => contact.id === idContact)

  if (!contact) {
    throw new AppError("Contact not found", 404)
  }

  await contactRepository.delete(idContact)
}

export default deleteContactService