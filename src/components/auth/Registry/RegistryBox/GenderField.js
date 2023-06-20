import { Form, Select } from 'antd';


const GenderField = () => {
  return (
    <>
         <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!'
          }
        ]}
      >
        <Select placeholder="select your gender">
          <Select.Option value='male'>Male</Select.Option>
          <Select.Option value='female'>Female</Select.Option>
        </Select>
      </Form.Item>
    </>
  )
}

export default GenderField
