/**
 * Main routes
 */

import express from "express";
import { registerUser } from "../controllers/user_controller";

const router = express.Router();

// Router Tester

/**
 * GET /
 */
router.get("/", (req, res) => {
  res.send({
    message: "You did it! This is a route!🫨 ",
  });
});

/**
 * POST /register
 * Register a new user
 */

router.post("/register", registerUser);

export default router;
