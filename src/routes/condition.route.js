import { Router } from "express";
import conditionController from "../controllers/condition.controller";
import awaitHandlerFactory from "@middleware/awaitHandlerFactory.middleware";

const router = Router();

router.get("/get", awaitHandlerFactory(conditionController.getAll));
router.post("/add", awaitHandlerFactory(conditionController.add));
router.post("/edit", awaitHandlerFactory(conditionController.edit));
router.post("/remove", awaitHandlerFactory(conditionController.removeById));

export default router;
