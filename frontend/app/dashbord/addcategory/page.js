"use client";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const AddCategory = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const onFinish = (values) => {
    console.log("Success:", values);

    axios
      .post(
        "http://localhost:8000/api/v1/product/addcategory",
        {
          category: values.category.toLowerCase(),
        },
        {
          headers: {
            key: process.env.NEXT_PUBLIC_API_HEADER_KEY,
            token: user.token,
          },
        }
      )
      .then((response) => {
        console.log(response);
        toast.success(response.data, {
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
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data, {
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
  return (
    <div className="  mt-6">
      <ToastContainer />
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
          minWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Add Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please input your Category!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" ghost htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCategory;
