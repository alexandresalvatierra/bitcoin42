import { UserRepository } from "../../domain/repositories/user.repository";
import { UserPrismaRepository } from "../repositories/prisma/user-prisma.repository";

export const makeUserRepositoryFactory = (): UserRepository => {
  return new UserPrismaRepository();
};
