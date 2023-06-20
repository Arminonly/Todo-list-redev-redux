import { Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setTodos } from '../../store/actions';

const TodoInput = ({ item }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const editTodo = (text, id) => {
    const edited = [
      ...todos.map((todo) => (todo.id === id ? { ...todo, value: text } : todo))
    ];
    dispatch(setTodos(edited));
  };
  return (
    <>
      <Input
        className={item.complited ? 'done' : ''}
        value={item.value}
        onChange={(e) => editTodo(e.target.value, item.id)}
      />
    </>
  );
};

export default TodoInput;
