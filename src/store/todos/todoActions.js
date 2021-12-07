import { ADD_TODO } from "./todosTypes";

export const addTodo = (id, title) => {
  return {
    type: ADD_TODO,
    payload: {id, title}
  };
};