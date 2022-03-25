import { Router } from "express";
import authController from "../controllers/auth.controller";
import awaitHandlerFactory from "@middleware/awaitHandlerFactory.middleware";

const router = Router();

router.post("/adminlogin", awaitHandlerFactory(authController.adminLogin));
router.post("/register", awaitHandlerFactory(authController.userRegister));

export default router;
