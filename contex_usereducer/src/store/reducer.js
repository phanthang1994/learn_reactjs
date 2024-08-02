import {
  SET_TODO_INPUT,
  ADD_TODO,
  DELETE_TODO,
  // SAVE_TODO,
  // CLEAR_ALL_TODO,
} from "./constants";

const initState = {
  todos: [],
  todoInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      console.log("SET_TODO_INPUT", action.payload)
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      console.log("ADD_TODO", action.payload)
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      console.log("DELETE_TODO", action.payload)
      return {
        ...state,
        todos: state.todos.filter((_, index) => index!== action.payload),
      };
    default:
      throw new Error("Invalid action.");
  }
}

export { initState };
export default reducer;
