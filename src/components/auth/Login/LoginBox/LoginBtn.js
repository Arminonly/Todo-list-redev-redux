import { Button, Form} from 'antd';
import { Link } from 'react-router-dom';

const LoginBtn = () => {
  return (
    <Form.Item>
    <Button
      block
      type="primary"
      htmlType="submit"
      className="login-form-button"
      style={{ marginBottom: 10 }}
    >
      Log in
    </Button>
    Or <Link to="/registry">register now!</Link>
  </Form.Item>
  )
}

export default LoginBtn
