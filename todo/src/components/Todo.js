import React from "react";

function Todo(props) {
  return (
    <div>
      <pre
        style={{
          textDecoration: props.todo.completed ? "line-through" : "none",
        }}
        onClick=""
      >
        {JSON.stringify(props.todo, null, 2)}
      </pre>
    </div>
  );
}

export default Todo;
