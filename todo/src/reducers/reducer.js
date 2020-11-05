export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
      completed_date: null,
    },
    {
      item: "Learn about redux",
      completed: false,
      id: 3892955589,
      completed_date: null,
    },
  ],
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { todos: [...state.todos, action.payload] };
    case "COMPLETE_ITEM":
      const completedItems = state.todos.map((el) => {
        if (el.id === action.payload.id)
          return {
            item: el.item,
            completed: !el.completed,
            id: el.id,
            completed_date: el.completed ? null : Date.now(),
          };
        return el;
      });
      return {
        todos: completedItems,
      };
    case "CLEAR_ITEMS":
      const clearedItems = state.todos.filter((el) => {
        return !el.completed;
      });
      console.log("REDUCER: ", clearedItems);
      return {
        todos: clearedItems,
      };
    default:
      return state;
  }
}
