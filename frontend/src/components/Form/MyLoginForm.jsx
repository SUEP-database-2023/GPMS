import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Typography, Radio } from "antd";
import "../../index.css";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const App = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    if (values.UserType === "student") {
      navigate("/studentpage");
    } else if (values.UserType === "teacher") {
      navigate("/teacherpage");
    } else if (values.UserType === "manager") {
      navigate("/managerpage");
    }
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen w-screen bg-blue-100">
      <div className="bg-white p-8 mb-8 rounded-lg text-center">
        <div className="mb-4">
          <Title level={1}>毕业设计管理系统</Title>
        </div>
        <div className="mb-8">
          <Title level={5}>账号登录</Title>
        </div>
        <Form
          name="normal_login"
          className="max-w-300"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <div className="mb-4">
            <Form.Item name="UserType" initialValue="student">
              <Radio.Group buttonStyle="solid">
                <Radio.Button value="student">学生端</Radio.Button>
                <Radio.Button value="teacher">教师端</Radio.Button>
                <Radio.Button value="manager">管理员端</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </div>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "请输入学号!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600"
            >
              <Title level={4} style={{ margin: 0 }}>
                Log in
              </Title>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default App;
