import {Form, Input } from 'antd';

const UsernameField = () => {
  return (
    <Form.Item
    name="username"
    label="Username"
    tooltip="What do you want others to call you?"
    rules={[
      {
        required: true,
        message: 'Please input your username!',
        whitespace: true
      }
    ]}
    hasFeedback
  >
    <Input />
  </Form.Item>
  )
}

export default UsernameField
