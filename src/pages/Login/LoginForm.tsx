import { Button, Form, Input, Typography } from 'antd';
import './LoginForm.css';

const { Link, Text } = Typography;

export const LoginForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Login values:', values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      requiredMark={false}
      className="login-form"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please enter your email' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password />
      </Form.Item>

      <div className="forgot-password-link">
        <Link href="#">Forgot Password?</Link>
      </div>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-button">
          Login
        </Button>
      </Form.Item>

      <div className="signup-text">
        Don't have an account? <Link href="#">Sign up</Link>
      </div>
    </Form>
  );
};
