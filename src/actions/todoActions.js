let nextTodoId = 0;

export const deleteTodoAction = id => {
  return {
    type: "DELETE_TODO",
    payload: id
  };
};

export const addTodoAction = todo => {
  return {
    type: "ADD_TODO",
    text: todo,
    id: nextTodoId++
  };
};
