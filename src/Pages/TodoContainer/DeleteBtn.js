import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setTodos } from '../../store/actions';

const DeleteBtn = ({ item }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const deleteTodo = (id) => {
    const deleted = [...todos].filter((todo) => todo.id !== id);
    dispatch(setTodos(deleted));
  };
  return (
    <Button
      onClick={() => deleteTodo(item.id)}
      style={{ marginLeft: '5px' }}
      danger
    >
      Delete
    </Button>
  );
};

export default DeleteBtn;
