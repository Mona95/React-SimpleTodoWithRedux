const initState = {
  todos: []
};

export const rootReducer = (state = initState, action) => {
  let todos;
  switch (action.type) {
    case "DELETE_TODO":
      todos = state.todos.filter(todo => {
        return todo.id !== action.payload;
      });
      return {
        ...state,
        todos
      };
    case "ADD_TODO":
      console.log([...state.todos, { id: action.id, content: action.text }]);
      return {
        todos: [...state.todos, { id: action.id, content: action.text }]
      };
    default:
      return state;
  }
};
