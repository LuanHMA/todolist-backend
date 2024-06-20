import express from "express";
import { removeTodoController } from "../controllers/remove-todo-controller.js";

export const removeTodoRouter = express.Router();

removeTodoRouter.post("/", removeTodoController);
