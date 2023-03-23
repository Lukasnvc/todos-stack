import axios from "axios";

export type Todo = {
  id: number;
  title: string;
}

export const fetchTodos = (): Promise<Todo[]> => {
  return axios('http://localhost:8080/').then((response) => response.data);
}