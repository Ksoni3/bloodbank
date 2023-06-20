import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import { createInventoryController, getInventoryController } from "../controllers/inventoryController.js";

const router = express.Router();

//routes

//Add Inventory

router.post("/create-inventory", createInventoryController);

// get inventory

router.get("/get-inventory", userAuth, getInventoryController);

export default router;
