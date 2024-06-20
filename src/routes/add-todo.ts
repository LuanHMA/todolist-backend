import express from "express";
import { addTodoController } from "../controllers/add-todo-controller.js";

export const addTodoRouter = express.Router();

addTodoRouter.post("/", addTodoController);
