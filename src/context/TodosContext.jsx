import axios from "axios";
import React, { useEffect, useReducer, createContext } from "react";
import { getAllTodos } from "./action";
import todoReducer from "./todosReducer";

export const todostore = createContext();

const TodosContext = ({ children }) => {
  const [todos, dispatchtodo] = useReducer(todoReducer, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/todo")
      .then((res) => dispatchtodo(getAllTodos(res.data)));
  }, []);

  return (
    <todostore.Provider value={{ todos, dispatchtodo }}>
      {children}
    </todostore.Provider>
  );
};

export default TodosContext;
