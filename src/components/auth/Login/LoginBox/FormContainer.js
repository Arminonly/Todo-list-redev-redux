import { Form } from 'antd';
import EmailField from './EmailField';
import PasswordField from './PasswordField';
import LoginBtn from './LoginBtn';

const FormContainer = ({ sendLogin }) => {
  return (
    <Form name="normal_login" className="login-form" onFinish={sendLogin}>
      <EmailField />
      <PasswordField />
      <LoginBtn />
    </Form>
  );
};

export default FormContainer;
