import React  from "react";
import { TodoContext } from '../TodoContext';
import "./TodoCounter.css"

function TodoCounter({total,completed}){
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
  
  return (
     <h2>Has completado {completedTodos} de {totalTodos} tareas</h2>
  );
}

export {TodoCounter};
