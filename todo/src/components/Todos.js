import React from "react";
import Todo from "./Todo";

function Todos(props) {
  return (
    <div>
      {props.todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} setTodos={props.setTodos} />;
      })}
    </div>
  );
}

export default Todos;
