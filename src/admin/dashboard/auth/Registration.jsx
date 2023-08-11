import { Link } from "react-router-dom";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import "./Auth.css";
import logo from "@assets/logo.png";

export default Registration => {
  
  // Form handler fired after every input field is entered
  const handleRegistration = event => {
    console.log(event)

    // Store values in db and fetch them for AUTH
    console.log(event.email)
  };

  return (
    <>
      <div className="auth-container">
        <Link to="/" className="brand">
          <img src={logo} className="logo" />
          <h5>DragonFly Barbers</h5>
        </Link>
        <h3>Welcome</h3>
        <p>Please enter your details to continue</p>
        <Form

          name="normal_registration"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={handleRegistration}
        >
          <Form.Item
            name="username"
            // label="Username"
            rules={[
              {
                required: true,
                message: "Please enter username",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
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
                requred: true,
                message: "Please enter new password",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            rules={[
              {
                requred: true,
                message: "Please confirm your password",
              },
              ({getFieldValue}) => ({
                validator(_, value){
                  if (!value || getFieldValue('password') === value){
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"))
                }
              })
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="registration-form-button"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <p>
          Have an Account?
          <Link to="/admin/login" className="acc-link">
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
};
