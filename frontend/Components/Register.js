"use client";
import React, { useState } from "react";
import axios from "axios";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getEmail } from "@/app/redux/emailSlice";
import { ToastContainer, toast } from "react-toastify";
import ResendEmail from "./ResendEmail";
const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post(
        "http://localhost:8000/api/v1/auth/register",
        {
          name: values.username,
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            key: "1111",
          },
        }
      )
      .then((response) => {
        console.log(response);
        dispatch(getEmail(response.data.email));
        toast.success("Please Verify Your Email", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
        minWidth: 500,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"
    >
      <ToastContainer />
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <div className="flex justify-between">
          <Button type="primary" ghost htmlType="submit">
            Register
          </Button>
          <Button onClick={() => router.push("/login")} type="primary" ghost>
            Login Page
          </Button>
          <ResendEmail />
        </div>
      </Form.Item>
    </Form>
  );
};
export default Register;
