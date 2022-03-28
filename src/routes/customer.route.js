import { Router } from "express";
import customerController from "../controllers/customer.controller";
import awaitHandlerFactory from "@middleware/awaitHandlerFactory.middleware";
const router = Router();

// router.get("/get", awaitHandlerFactory(customerController.getAll));
// router.post("/add", awaitHandlerFactory(customerController.add));
// router.post("/edit", awaitHandlerFactory(customerController.edit));
// router.post("/remove", awaitHandlerFactory(customerController.removeById));

export default router;
