import React, { useState, useEffect } from 'react';
import { Skeleton, Space, Row, Col, Spin, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux';
import AddForm from '../components/FormContainer/AddForm';
import DoneBtn from './TodoContainer/DoneBtn';
import TodoInput from './TodoContainer/TodoInput';
import DeleteBtn from './TodoContainer/DeleteBtn';
import DrawerContainer from '../components/Drawer/DrawerContainer';

const Main = () => {
  const todos = useSelector((state) => state.todo.todos);

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [spinLoading, setSpinLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const showDrawer = () => {
    setOpen(true)
  };
  const onClose = () => {
    setOpen(false);
  };
  const drawerExit = () => {
    setSpinLoading(true);
    setTimeout(() => {
      setSpinLoading(false);
      navigate('/');
    }, 800);
  };

  return (
    <div>
      <Spin size="large" spinning={spinLoading} />

      <Skeleton
        loading={loading}
        active
        round
        title={{ width: '100%' }}
        paragraph={{
          rows: 4,
          width: '100%'
        }}
      >
        <Row style={{ marginTop: 10 }}>
          <Col flex="100px" />
          <Col flex="auto">
            <Space size={5} direction="vertical">
              <AddForm showDrawer={showDrawer} />
              <Divider />
              {todos && todos.length ? (
                todos.map((item) => (
                  <Space.Compact key={item.id}>
                    <DoneBtn item={item} />
                    <TodoInput item={item} />
                    <DeleteBtn item={item} />
                  </Space.Compact>
                ))
              ) : (
                <h3>no todos</h3>
              )}

              <DrawerContainer
                onClose={onClose}
                drawerExit={drawerExit}
                open={open}
              />
            </Space>
          </Col>
          <Col flex="100px" />
        </Row>
      </Skeleton>

      <Spin size="large" spinning={spinLoading} />
    </div>
  );
};

export default Main;
