import { Router } from "express";
import translateController from "../controllers/translate.controller";
import awaitHandlerFactory from "@middleware/awaitHandlerFactory.middleware";
const router = Router();

router.get("/get", awaitHandlerFactory(translateController.getAll));
router.post("/add", awaitHandlerFactory(translateController.add));
router.post("/edit", awaitHandlerFactory(translateController.edit));
router.post("/remove", awaitHandlerFactory(translateController.removeById));

export default router;
