import { Router } from "express";
import categoryController from "../controllers/category.controller";
import awaitHandlerFactory from "@middleware/awaitHandlerFactory.middleware";
const router = Router();

/**
 * @router Login
 */
router.post("/get", awaitHandlerFactory(categoryController.getAll));
router.post("/add", awaitHandlerFactory(categoryController.add));

export default router;
