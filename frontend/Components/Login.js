"use client";
import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import ForgetPass from "./ForgetPass";
import { useDispatch } from "react-redux";
import { activeUser, getuser } from "@/app/redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post("http://localhost:8000/api/v1/auth/login", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch(activeUser(res.data));
        if (res.data.message == "Login success") {
          toast.success("Login success", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          router.push("/dashbord");
        } else {
          toast.error(res.data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
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
            Login
          </Button>
          <ForgetPass />
        </div>
      </Form.Item>
    </Form>
  );
};
export default Login;
