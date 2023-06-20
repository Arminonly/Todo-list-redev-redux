import { Form, Input } from 'antd';

export default function EmailField ()  {
  return (
    <>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!'
          },
          {
            required: true,
            message: 'Please input your E-mail!',
            whitespace: true
          }
        ]}
        hasFeedback
      >
        <Input />
      </Form.Item> 
    </>
  )
}

