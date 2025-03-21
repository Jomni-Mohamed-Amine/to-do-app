import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Addtodos from "./componets/Addtodos";
import TodosContext from "./context/todosContext";
import ListTodos from "./componets/ListTodos";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <TodosContext>
      <ToastContainer />
      <Addtodos />
      <ListTodos />
    </TodosContext>
  );
}

export default App;
