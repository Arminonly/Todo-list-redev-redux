import React from 'react';
import { Button, Space, Drawer } from 'antd';

const DrawerContainer = ({ onClose, drawerExit, open }) => {
  return (
    <>
      <Drawer
        title="Уже уходите?"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Space>
          <Button danger block onClick={onClose}>
            Нет, пока остаюсь
          </Button>
          <Button onClick={drawerExit} type="primary">
            Да, уже пора
          </Button>
        </Space>
      </Drawer>
    </>
  );
};

export default DrawerContainer;
