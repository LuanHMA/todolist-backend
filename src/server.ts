import express, { json } from "express";
import { getTodosRouter } from "./routes/get-todos.js";
import { addTodoRouter } from "./routes/add-todo.js";
import { removeTodoRouter } from "./routes/remove-todo.js";
import dotenv from "dotenv";
import { updateTodoRouter } from "./routes/update-todo.js";
import cors from "cors";

const port = 3333;
const app = express();
dotenv.config();

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  return res.json({ message: "Api is running" });
});

app.use("/get-todos", getTodosRouter);
app.use("/add-todo", addTodoRouter);
app.use("/remove-todo", removeTodoRouter);
app.use("/update-todo", updateTodoRouter);

app.listen(port, () => console.log("Server is running on port", port));
