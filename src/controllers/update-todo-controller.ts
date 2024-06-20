import { Request, Response } from "express";
import { z } from "zod";
import { updateTodo } from "../models/todo-model.js";

export async function updateTodoController(req: Request, res: Response) {
  const bodySchema = z.object({
    checked: z.number(),
    id: z.number(),
  });

  const { checked, id } = bodySchema.parse(req.body);

  try {
    await updateTodo(checked, id);
    return res.status(200).json({ message: "Tarefa alterada com sucesso!" });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao alterar tarefa!" });
  }
}
