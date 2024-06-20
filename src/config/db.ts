import dotenv from "dotenv";
import mysql from "mysql2/promise";
dotenv.config();

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER, // substitua pelo nome do usuário criado
  password: process.env.DB_PASSWORD, // substitua pela senha criada
  database: process.env.DB_DATABASE, // substitua pelo nome do banco de dados criado
});
