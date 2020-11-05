import { useState } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

import "./App.css";

const initialValues = [
  {
    item: "Learn about reducers",
    completed: true,
    id: 3892987589,
  },
  {
    item: "Learn about redux",
    completed: false,
    id: 3892955589,
  },
];

function App() {
  const [todos, setTodos] = useState(initialValues);

  return (
    <div className="App">
      <h1>Todo App!</h1>
      <Todos todos={todos} setTodos={setTodos} />
      <TodoForm />
    </div>
  );
}

export default App;
