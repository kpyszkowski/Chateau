import bcrypt from 'bcrypt'

export const comparePasswords = async (
  userPassword: string,
  hashPassword: string,
) => await bcrypt.compare(userPassword, hashPassword)

export const getHashedPassword = async (password: string, saltRounds: number) =>
  await bcrypt.hash(password, saltRounds)
