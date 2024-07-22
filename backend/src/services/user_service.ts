import prisma from "../prisma";
import { NewUser } from "../types/user.types";

/**
 * Create a new user and store in database
 * @param data user data
 */

export const createUser = async (data: NewUser) => {
  return await prisma.user.create({
    data,
  });
};
