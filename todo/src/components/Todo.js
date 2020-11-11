import React from "react";
import Moment from "react-moment";

function Todo(props) {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: "10px 0 0 20px",
        fontSize: "1.5rem",
      }}
    >
      <div
        style={{
          textDecoration: props.todo.completed ? "line-through" : "none",
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
        }}
        onClick={() => props.completeItem(props.todo.id)}
      >
        <div
          style={{
            color:
              props.todo.deadline.setHours(0, 0, 0, 0) <
              new Date().setHours(0, 0, 0, 0)
                ? "red"
                : "black",
          }}
        >
          {props.todo.item}
        </div>
        <div
          style={{
            fontSize: "1rem",
            color:
              props.todo.deadline.setHours(0, 0, 0, 0) <
              new Date().setHours(0, 0, 0, 0)
                ? "red"
                : "black",
          }}
        >
          {props.todo.deadline.toDateString()}
        </div>
        <div>
          {props.todo.tags.map((tag, i) => {
            return (
              <span
                key={i}
                style={{
                  background: "lightblue",
                  margin: "0px 5px",
                  padding: "0px 5px",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  fontSize: "1rem",
                }}
              >
                {tag.trim()}
              </span>
            );
          })}
        </div>
      </div>
      <pre
        style={{
          display: props.todo.completed ? "flex" : "none",
          justifyContent: "center",
          color: "gray",
          fontSize: ".8rem",
          marginBottom: "0px",
        }}
      >
        <span>completed </span>
        <Moment fromNow>{props.todo.completed_date}</Moment>
      </pre>
      <pre
        style={{
          display:
            props.todo.deadline.setHours(0, 0, 0, 0) <
            new Date().setHours(0, 0, 0, 0)
              ? "flex"
              : "none",
          justifyContent: "center",
          color: "red",
          fontSize: ".8rem",
          marginBottom: "0px",
        }}
      >
        late
      </pre>
    </div>
  );
}

export default Todo;
