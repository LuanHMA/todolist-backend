import { Request, Response } from "express";
import { z } from "zod";
import { removeTodo } from "../models/todo-model.js";

export async function removeTodoController(req: Request, res: Response) {
  const bodySchema = z.object({
    id: z.number().min(1),
  });

  const { id } = bodySchema.parse(req.body);

  try {
    await removeTodo(id);
    return res.status(200).json({ message: "Tarefa removida com sucesso!" });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao remover tarefa!" });
  }
}
