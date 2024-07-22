/**
 * User types
 */

import { User } from "@prisma/client";

export type UserId = Pick<User, "id">;

export type NewUser = Omit<User, "id">;
