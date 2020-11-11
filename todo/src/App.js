import { useState, useReducer } from "react";
import Todos from "./components/Todos";
import { Button, Form, Container, Card, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

import { reducer, initialState } from "./reducers/reducer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("STATE: ", state);

  const [item, setItem] = useState("");
  const [date, setDate] = useState(new Date());
  const [tags, setTags] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleTags = (e) => {
    setTags(e.target.value);
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
        deadline: date,
        tags: tags.split(" "),
      },
    });
    setItem("");
    setTags("");
    setDate(new Date());
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
      <h1 style={{ textAlign: "center" }}>Todo App!</h1>
      <Container>
        <Card
          style={{ width: "1000px", margin: "20px auto", background: "#FFE" }}
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
            <Form.Row
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                margin: "15px 0 0 0",
              }}
            >
              <Col sm={2}>
                <Form.Label>Deadline</Form.Label>
              </Col>
              <Col sm={2}>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  style={{ margin: "0px 0px" }}
                />
              </Col>
            </Form.Row>
            <Form.Row
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                margin: "15px 0 0 0",
              }}
            >
              <Col sm={2}>
                <Form.Label style={{ marginLeft: "0px" }}>Tags:</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  size="md"
                  name="item"
                  placeholder="Enter tags..."
                  value={tags}
                  onChange={handleTags}
                />
              </Col>
            </Form.Row>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default App;
