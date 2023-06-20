import {  Form, Input } from 'antd';

const Password = () => {
  return (
    <>
       <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          },
          {
            min: 8,
            whitespace: true
          }
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item> 
    </>
  )
}

export default Password
