import React from "react";
import Moment from "react-moment";

function Todo(props) {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: "10px 0 0 20px",
        fontSize: "1.5rem",
      }}
    >
      <div
        style={{
          textDecoration: props.todo.completed ? "line-through" : "none",
        }}
        onClick={() => props.completeItem(props.todo.id)}
      >
        {props.todo.item}
      </div>
      <pre
        style={{
          display: props.todo.completed ? "flex" : "none",
          justifyContent: "center",
          color: "gray",
          fontSize: ".8rem",
        }}
      >
        <span>completed </span>
        <Moment fromNow>{props.todo.completed_date}</Moment>
      </pre>
    </div>
  );
}

export default Todo;
