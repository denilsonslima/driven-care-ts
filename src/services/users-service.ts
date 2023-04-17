import { sessions } from "@prisma/client";
import { conflictError } from "../errors/conflict-error.js";
import { unathorizedError } from "../errors/unauthorized-error.js";
import { validateUser } from "../repositories";
import usersRepositories, {
  userSignIn,
} from "../repositories/users-repositories.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

async function createUser(data: validateUser) {
  const findByEmail = await usersRepositories.findByEmail(data.email);
  if (findByEmail) throw conflictError("Email already exists");

  const hashPassword = await bcrypt.hash(data.password, 10);
  data.password = hashPassword;

  await usersRepositories.createUser(data);

  return;
}

async function userSignIn(data: userSignIn) {
  const findByEmail = await usersRepositories.findByEmail(data.email);
  if (!findByEmail) throw unathorizedError();

  const validatePassword = await bcrypt.compare(
    data.password,
    findByEmail.password
  );

  if (!validatePassword) throw unathorizedError();

  const token =  uuid()
  await usersRepositories.createSessions(token, findByEmail.id)
  return token
}


export default {
  createUser,
  userSignIn,
};
