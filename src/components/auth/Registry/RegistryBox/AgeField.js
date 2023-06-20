import { Form, InputNumber } from 'antd';

const AgeField = () => {
  return (
    <>
      <Form.Item
        name="age"
        label="Age"
        rules={[
          {
            required: true
          }
        ]}
      >
        <InputNumber
          style={{
            width: '100%'
          }}
        />
      </Form.Item>
    </>
  )
}

export default AgeField
