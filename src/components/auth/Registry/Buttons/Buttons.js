import { Link } from 'react-router-dom';
import { Typography, Button, Form } from 'antd';
export const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  };

const Buttons = ({onReset}) => {
  return (
    <>
       <Form.Item {...tailFormItemLayout}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginBottom: 12, width: '45%', marginRight: '5%' }}
        >
          Register
        </Button>
        <Button
          danger
          htmlType="button"
          onClick={onReset}
          style={{ marginBottom: 12, width: '45%', marginLeft: '5%' }}
        >
          Reset
        </Button>
        <Button type="text" block>
          <Typography.Text strong underline="true">
            Вернуться на страницу &nbsp;<Link to="/">Log in</Link>
          </Typography.Text>
        </Button>
      </Form.Item>
    </>
  )
}

export default Buttons
