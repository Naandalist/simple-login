import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    username: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.value === "") {
      setFormError({ ...formError, [e.target.name]: "This field is required" });
    } else {
      setFormError({ ...formError, [e.target.name]: "" });
    }

    setIsFormValid(formData.username !== "" && formData.password !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setFormError({
        username: !formData.username ? "This field is required" : "",
        password: !formData.password ? "This field is required" : "",
      });
    } else {
      console.log("data: ", formData);
    }
  };

  return (
    <>
      <Row className="login-form-container" justify="center" align="middle">
        <Col xs={24} md={12} lg={8}>
        <h1 className="login-title">Simple Login</h1>
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item name="username" rules={[{ required: true }]}>
              <Input
                onChange={handleChange}
                placeholder="Username"
                name="username"
              />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true }]}>
              <Input.Password
                onChange={handleChange}
                placeholder="Password"
                name="password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                disabled={!isFormValid}
                type="primary"
                block
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default App;
