import {  TODOS, VALUE } from './actions';

const initial = {
  value: '',
  todos: [],
  open:false
};

export const todoReducer = (state = initial, action) => {
  switch (action.type) {
    case VALUE:
      return {
        ...state,
        value: action.payload
      };
    case TODOS:
      return {
        ...state,
        todos: action.payload
      };

    default:
      return state;
  }
};
