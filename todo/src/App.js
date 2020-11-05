import { useState, useReducer } from "react";
import Todos from "./components/Todos";

import { reducer, initialState } from "./reducers/reducer";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("STATE: ", state);

  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_ITEM",
      payload: {
        item: item,
        completed: false,
        id: Date.now(),
        completed_date: null,
      },
    });
    setItem("");
  };

  const completeItem = (itemId) => {
    dispatch({
      type: "COMPLETE_ITEM",
      payload: {
        id: itemId,
      },
    });
  };

  const clearItems = (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_ITEMS" });
  };

  return (
    <div className="App">
      <h1>Todo App!</h1>
      <Todos key={state.id} todos={state.todos} completeItem={completeItem} />
      <form onSubmit={addItem}>
        <input
          name="item"
          placeholder="Enter todo..."
          value={item}
          onChange={handleChange}
        />
        <button>Add</button>
        <button onClick={clearItems}>Clear</button>
      </form>
    </div>
  );
}

export default App;
