import express from "express";
import { getTodosController } from "../controllers/get-todos.controller.js";

export const getTodosRouter = express.Router();

getTodosRouter.get("/", getTodosController);
