import React, { useState } from 'react';
import { Space, Spin } from 'antd';
import { FcKey } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import FormContainer from './LoginBox/FormContainer';
import ModalBox from './LoginBox/ModalBox';

const LoginForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [spinLoading, setSpinLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    let url = 'https://todo-redev.herokuapp.com/api/auth/login';
    const result = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });

    const data = await result.json();
    let token = data.token;
    localStorage.setItem('My_token', token);
    if (!token) {
      setShowModal(true);
    } else {
      navigate('/main');
    }

  };

  const navigateToRegistry = () => {
    setSpinLoading(true);
    setTimeout(() => {
      setSpinLoading(false);
      navigate('/registry');
    }, 1000);
  };

  return (
    <>
      <Space
        direction="vertical"
        style={{
          width: '70%',
          marginTop: '50px',
          border: '3px solid green',
          borderRadius: 15
        }}
      >
        <Spin size="large" spinning={spinLoading} />
        <FcKey style={{ width: '20%', height: '10%' }} />
        <FormContainer sendLogin={onFinish} />
        <ModalBox
          navigateToRegistry={navigateToRegistry}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Spin size="large" spinning={spinLoading} />
      </Space>
    </>
  );
};

export default LoginForm;
