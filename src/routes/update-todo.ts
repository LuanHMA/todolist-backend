import express from "express";
import { updateTodoController } from "../controllers/update-todo-controller.js";
import { updateTodoTitleController } from "../controllers/updateTodoTitleController.js";

export const updateTodoRouter = express.Router();

updateTodoRouter.post("/", updateTodoController);

updateTodoRouter.post("/title", updateTodoTitleController);
