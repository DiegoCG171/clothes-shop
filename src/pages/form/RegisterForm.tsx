
import { Form, Input, Button, Typography } from 'antd';
import './RegisterForm.css';

const { Text } = Typography;

export const RegisterForm = () => {
  return (
    <div className="register-container">
      <Form className="register-form" layout="vertical">
        <Form.Item label={<span className="label-text">Name</span>} name="name">
          <Input  className="input"/>
        </Form.Item>

        <Form.Item label={<span className="label-text">Email</span>} name="email">
          <Input className="input"/>
        </Form.Item>

        <Form.Item label={<span className="label-text">Password</span>} name="password">
          <Input className="input"/>
        </Form.Item>

        <div className="terms-text">
          <Text type="secondary">
          By creating an account you agree with our Terms of Service, Privacy Policy,
          </Text>
        </div>

        <Form.Item>
          <Button type="primary" block className="register-button">
            Create account
          </Button>
        </Form.Item>

        <div className="link-text ">
          <Text type="secondary">
          Already have an account? Log in
          </Text>
        </div>
      </Form>
    </div>
  );
};

