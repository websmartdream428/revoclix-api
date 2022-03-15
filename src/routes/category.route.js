import { Router } from "express";
import categoryController from "../controllers/category.controller";
import awaitHandlerFactory from "@middleware/awaitHandlerFactory.middleware";
const router = Router();

router.post("/get", awaitHandlerFactory(categoryController.getAll));
router.post("/add", awaitHandlerFactory(categoryController.add));
router.post("/edit", awaitHandlerFactory(categoryController.edit));
router.post("/remove", awaitHandlerFactory(categoryController.removeById));

export default router;
