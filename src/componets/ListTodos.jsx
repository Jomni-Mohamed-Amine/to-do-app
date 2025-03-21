import React, { useContext } from 'react';
import { todostore } from '../context/todosContext';
import Todoitem from './Todoitem';

function ListTodos() {
  const { todos } = useContext(todostore);
  return (
    <div className='flex flex-col bg-amber-300'>
      <h1>All Todos</h1>
      {todos.map((todo) => (
        <Todoitem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default ListTodos;
