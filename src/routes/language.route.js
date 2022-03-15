import { Router } from "express";
import langController from "../controllers/language.controller";
import awaitHandlerFactory from "@middleware/awaitHandlerFactory.middleware";

const router = Router();

router.post("/get", awaitHandlerFactory(langController.getAll));
router.post("/add", awaitHandlerFactory(langController.add));
router.post("/edit", awaitHandlerFactory(langController.edit));
router.post("/remove", awaitHandlerFactory(langController.removeById));

export default router;
