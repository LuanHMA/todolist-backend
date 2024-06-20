import { Request, Response } from "express";
import { getAllTodos } from "../models/todo-model.js";

export async function getTodosController(req: Request, res: Response) {
  const todos = await getAllTodos();

  return res.json(todos).status(200);
}
