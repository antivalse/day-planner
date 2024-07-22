/**
 * User Controller
 */

import { Request, Response } from "express";
import { createUser } from "../services/user_service";

/**
 * Register a new user
 */

export const registerUser = async (req: Request, res: Response) => {
  try {
    await createUser({
      username: "user",
      password: "password",
    });

    res.status(201).send({
      status: "success",
      data: {
        username: "user",
      },
    });
  } catch (err) {
    return res.status(500).send({
      status: "error",
      message: "Failed to create a new user in database",
    });
  }
};
