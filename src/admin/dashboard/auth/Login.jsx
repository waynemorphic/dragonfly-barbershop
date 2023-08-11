import { Link } from "react-router-dom";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "./Auth.css";
import logo from "@assets/logo.png";

export default Login => {
  const handleLogin = (values) => {
    // Get user values and verify with db entries from registration
    console.log("Received", values);
  };

  return (
    <>
      <div className="auth-container">
        <Link to="/" className="brand">
          <img src={logo} className="logo" />
          <h5>DragonFly Barbers</h5>
        </Link>
        <h3>Welcome Back</h3>
        <p>Please enter your details to continue</p>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={handleLogin}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email address",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email Address"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter password",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="">
              Forgot Password?
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <p>
          Don't have an Account?
          <Link to="/admin/register" className="acc-link">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};
