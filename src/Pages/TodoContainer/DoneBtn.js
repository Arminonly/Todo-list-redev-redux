import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setTodos } from '../../store/actions';

const DoneBtn = ({ item }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const complitedTodo = (id) => {
    const complited = [...todos];
    // eslint-disable-next-line
    complited.map((todo) => {
      if (todo.id === id) {
        todo.complited = !todo.complited;
      }
    });
    dispatch(setTodos(complited));
  };
  return (
    <Button
      onClick={() => complitedTodo(item.id)}
      style={{ marginRight: '5px' }}
      type="primary"
    >
      Done
    </Button>
  );
};

export default DoneBtn;
