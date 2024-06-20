import { Request, Response } from "express";
import { z } from "zod";
import { addNewTodo } from "../models/todo-model.js";

export async function addTodoController(req: Request, res: Response) {
  const bodySchema = z.object({
    title: z.string(),
  });

  const { title } = bodySchema.parse(req.body);

  try {
    await addNewTodo(title);
    return res.status(201).json({ message: "Tarefa criada com sucesso!" });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao criar tarefa!" });
  }
}
