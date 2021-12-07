import { ADD_TODO } from "./todosTypes";

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {

  switch( action.type ){

    case ADD_TODO: 

    let todos = [
      ...state.todos,
      {id: action.payload.id, title: action.payload.title}
    ];

    return {
      ...state,
      todos
    };

    default: return state;

  }

};

export default todoReducer;