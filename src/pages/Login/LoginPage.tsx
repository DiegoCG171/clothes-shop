import { Form, Input, Button } from 'antd';
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <div className="login-container">
      <Form layout="vertical">
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

        <div className="login-form-footer">
          <a href="#">Forgot Password?</a>
        </div>

        <Form.Item>
          <Button className="login-button" type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>

        <div className="login-footer-text">
          Don’t have an account? <a href="#">Sign up</a>
        </div>
      </Form>
    </div>
  );
};

