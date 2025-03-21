import React, { useContext } from "react";
import { toast } from "react-toastify";
import { todostore } from "../context/todosContext";
import { useRef } from "react";
import { addTodoAction } from "../context/action";
import axios from "axios";

const Addtodos = () => {
  const { dispatchtodo } = useContext(todostore);
  const referance = useRef();

  function addtodo() {
    const newTodo = {
      task: referance.current.value,
      status: "pending",
    };
    toast.promise(
      axios.post("http://localhost:3000/todo", newTodo).then((res) => {
        dispatchtodo(addTodoAction(res.data));
        referance.current.value = ""; // Clear the input field
      }),
      { pending: "loading", success: "Todo added", error: "Something went wrong" }
    );
  }

  return (
    <div className="flex gap-4 my-4 justify-center align-middle items-center">
      <input
        type="text"
        className="p-4 my-4 text-white bg-none border-amber-100 active border-4"
        ref={referance}
      />
      <button
        onClick={addtodo} // Use onClick instead of onSubmit
        className="bg-amber-200 border-amber-200 cursor-pointer text-black h-1/2 p-5 hover:bg-amber-400"
      >
        Add Todo
      </button>
    </div>
  );
};

export default Addtodos;