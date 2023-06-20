import {  Form, Input } from 'antd';
import { RiLockPasswordFill } from 'react-icons/ri';

const PasswordField = () => {
  return (
    <Form.Item
    name="password"
    label="Password"
    rules={[
      {
        required: true,
        message: 'Please input your Password!'
      },
      { min: 8, whitespace: true }
    ]}
    hasFeedback
  >
    <Input
      prefix={<RiLockPasswordFill className="site-form-item-icon" />}
      type="password"
      placeholder="Password"
    />
  </Form.Item>
  )
}

export default PasswordField
