import { Todo } from "../../types/todo.js";
import { db } from "../config/db.js";

export async function getAllTodos(): Promise<Todo[]> {
  try {
    const [results] = await db.execute<Todo[]>("SELECT * FROM todos");
    return results;
  } catch (error) {
    console.error("Erro ao buscar todos os registros: ", error);
    throw error;
  }
}

export async function addNewTodo(title: string) {
  try {
    await db.execute("INSERT INTO todos (title) VALUES (?)", [title]);
    console.log("Todo created with success!");
  } catch (error) {
    console.log("[ADD NEW TODO MODEL]: ", error);
  }
}

export async function removeTodo(id: number) {
  try {
    await db.execute("DELETE FROM todos WHERE id = ?", [id]);
    console.log(`Todo with id ${id} removed with successs`);
  } catch (error) {
    console.log("[REMOVE TODO MODEL]: ", error);
  }
}

export async function updateTodo(checked: number, id: number) {
  try {
    await db.execute("UPDATE todos SET checked = ? WHERE id = ?", [
      checked,
      id,
    ]);
  } catch (error) {
    console.log("[UPDATE TODO]: ", error);
  }
}

export async function updateTodoTitle(newTitle: string, id: number) {
  try {
    await db.execute("UPDATE todos SET title = ? WHERE id = ?", [newTitle, id]);
  } catch (error) {
    console.log("[UPDATE TODO TITLE]: ", error);
  }
}
