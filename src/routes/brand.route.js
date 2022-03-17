import { Router } from "express";
import brandController from "../controllers/brand.controller";
import awaitHandlerFactory from "@middleware/awaitHandlerFactory.middleware";

const router = Router();

router.get("/get", awaitHandlerFactory(brandController.getAll));
router.post("/add", awaitHandlerFactory(brandController.add));
router.post("/edit", awaitHandlerFactory(brandController.edit));
router.post("/remove", awaitHandlerFactory(brandController.removeById));

export default router;
