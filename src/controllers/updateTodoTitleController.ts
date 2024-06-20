import { Request, Response } from "express";
import { z } from "zod";
import { updateTodo, updateTodoTitle } from "../models/todo-model.js";

export async function updateTodoTitleController(req: Request, res: Response) {
  const bodySchema = z.object({
    newTitle: z.string(),
    id: z.number(),
  });

  const { newTitle, id } = bodySchema.parse(req.body);

  try {
    await updateTodoTitle(newTitle, id);
    return res
      .status(200)
      .json({ message: "Titulo da tarefa alterada com sucesso!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro ao alterar o titulo tarefa!" });
  }
}
