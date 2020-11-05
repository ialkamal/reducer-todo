import React from "react";
import Moment from "react-moment";

function Todo(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <pre
        style={{
          textDecoration: props.todo.completed ? "line-through" : "none",
        }}
        onClick={() => props.completeItem(props.todo.id)}
      >
        {JSON.stringify(props.todo, null, 2)}
      </pre>
      <pre
        style={{
          display: props.todo.completed ? "flex" : "none",
          justifyContent: "center",
          color: "blue",
        }}
      >
        <div>completed </div>
        <Moment fromNow>{props.todo.completed_date}</Moment>
      </pre>
    </div>
  );
}

export default Todo;
