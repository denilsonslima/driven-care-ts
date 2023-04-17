import { conflictError } from "../errors/conflict-error.js";
import { validateUser } from "../repositories";
import usersRepositories from "../repositories/users-repositories.js";
import bcrypt from 'bcrypt'

async function createUser(data: validateUser) {
  const findByEmail = await usersRepositories.findByEmail(data.email)
  if(findByEmail) throw conflictError("Email already exists")
  
  const hashPassword = await bcrypt.hash(data.password, 10)
  data.password = hashPassword
   
  await usersRepositories.createUser(data)

  return
}

export default {
  createUser
}