import { RowDataPacket } from "mysql2";

export interface Todo extends RowDataPacket {
  title: string;
  checked: boolean;
  id?: number;
}
