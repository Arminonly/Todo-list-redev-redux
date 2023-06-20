export const VALUE = 'VALUE';
export const TODOS = 'TODOS';

export const setValue = value => ({
  type: VALUE,
  payload: value
});
export const setTodos = todos => ({
  type: TODOS,
  payload: todos
});



