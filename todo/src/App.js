import { useState, useReducer } from "react";
import Todos from "./components/Todos";
import { Button, Form, Container, Card, Col } from "react-bootstrap";

import { reducer, initialState } from "./reducers/reducer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <Container>
        <Card
          style={{ width: "600px", margin: "20px auto", background: "#FFE" }}
        >
          <Todos
            key={state.id}
            todos={state.todos}
            completeItem={completeItem}
          />
          <Form
            style={{ margin: "25px auto", width: "90%" }}
            onSubmit={addItem}
          >
            <Form.Row>
              <Col sm={8}>
                <Form.Control
                  size="md"
                  name="item"
                  placeholder="Enter todo..."
                  value={item}
                  onChange={handleChange}
                />
              </Col>
              <Col style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Button type="submit" variant="primary">
                  Add
                </Button>
                <Button variant="danger" onClick={clearItems}>
                  Clear
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default App;
