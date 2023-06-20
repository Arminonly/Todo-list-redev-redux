import { Layout, Space, Typography, Row, Col, message } from 'antd';
import FormContainer from './RegistryBox/FormContainer';

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  borderRadius: 15,
  border: '2px solid lime'
};

const RegistryForm = () => {
  const onFinish = async values => {
    let url = 'https://todo-redev.herokuapp.com/api/users/register';
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    });

    const data = await res.json()
    if (!data.id) {
      setTimeout(() => {
        message.error(
          'Что то пошло не так((( Возможно такое имя или email уже существуют. Попытайтесь снова)))',
          5
        );
      }, 800);
    } else {
      setTimeout(() => {
        message.success(
          'Регистрация прошла успешно!!! Пожалуйста, перейдите на страницу с логином',
          5
        );
      }, 800);
    }
  };

  return (
    <Space
      direction="vertical"
      style={{
        width: '100%'
      }}
      size={[0, 48]}
    >
      <Layout.Content style={contentStyle}>
        <Typography.Title level={3}>
          Пожалуйста, зарегистрируйтесь!!!
        </Typography.Title>
        <Row wrap={false}>
          <Col flex="auto">
            <FormContainer registry={onFinish} />
          </Col>
        </Row>
      </Layout.Content>
    </Space>
  );
};

export default RegistryForm;
