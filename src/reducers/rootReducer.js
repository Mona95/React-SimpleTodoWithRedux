const initState = {
  todos: [
    { id: 1, content: "buy some milk" },
    { id: 2, content: "play mario card" }
  ]
};

export const rootReducer = (state = initState, action) => {
  return state;
};
