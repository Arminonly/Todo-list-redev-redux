import { Form } from 'antd';
import UsernameField from './UsernameField';
import EmailField from './EmailField';
import Password from './Password';
import GenderField from './GenderField';
import AgeField from './AgeField';
import Buttons from '../Buttons/Buttons';

export const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};

const FormContainer = ({ registry }) => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={registry}
      style={{
        maxWidth: '75%'
      }}
      scrollToFirstError
    >
      <UsernameField />
      <EmailField />
      <Password />
      <GenderField />
      <AgeField />
      <Buttons onReset={onReset} />
    </Form>
  );
};

export default FormContainer;
