import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import User from "./entities/users.entity";
import Contact from "./entities/contacts.entity";

const userRepository: Repository<User> = AppDataSource.getRepository(User);
const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact);

export {userRepository,contactRepository};
