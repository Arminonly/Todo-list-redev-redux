import React from 'react';
import { Button, Space, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setValue } from '../../store/actions';

const FormInput = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.todo.value);
  return (
    <Space.Compact>
      <Input
        placeholder="Писать здесь"
        value={value}
        onChange={e => dispatch(setValue(e.target.value))}
      />
      <Button type="primary" htmlType="submit">
        Добавить
      </Button>
    </Space.Compact>
  );
};

export default FormInput;
