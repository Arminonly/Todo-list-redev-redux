import { Form, Input} from 'antd';
import { MdAttachEmail } from 'react-icons/md';

const EmailField = () => {
  return (
    <Form.Item
    name="email"
    label="Email"
    rules={[
      {
        type: 'email',
        message: 'The input is not valid E-mail!'
      },
      {
        required: true,
        message: 'Please input your Email!'
      },
      { whitespace: true }
    ]}
    hasFeedback
  >
    <Input
      prefix={<MdAttachEmail className="site-form-item-icon" />}
      placeholder="email"
    />
  </Form.Item>
  )
}

export default EmailField
