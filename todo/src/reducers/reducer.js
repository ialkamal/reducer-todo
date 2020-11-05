export const initialState = {
  todos: [
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
