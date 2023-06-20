import { Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setTodos, setValue } from '../../store/actions';
import FormInput from './FormInput';

const FormBody = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.todo.value);
  const todos = useSelector(state => state.todo.todos);
  
  const addTodo = () => {
    if (!value.trim()) return;
    const newTodo = {
      id: uuidv4(),
      value,
      complited: false
    };
    dispatch(setTodos([...todos, newTodo]));
    dispatch(setValue(''));
    console.log(newTodo);
  };
  return (
    <Form onFinish={addTodo}>
      <Form.Item>
        <FormInput />
      </Form.Item>
    </Form>
  );
};

export default FormBody;
