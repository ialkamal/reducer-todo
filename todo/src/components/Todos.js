import React from "react";
import Todo from "./Todo";

function Todos(props) {
  return (
    <div>
      {props.todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} completeItem={props.completeItem} />;
      })}
    </div>
  );
}

export default Todos;
