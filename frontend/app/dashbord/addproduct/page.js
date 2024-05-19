"use client";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// Add Sub Category

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const AddProduct = () => {
  const [image, setImage] = useState({});

  const handlefile = (e) => {
    setImage(e.target.files[0]);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post(
        "http://localhost:8000/api/v1/product/addproduct",
        {
          name: values.name,
          image: image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
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

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/product/allcategory")
      .then((res) => {
        const data = [];
        res.data.map((item) => {
          data.push({
            value: item._id,
            label: item.category,
            className: "capitalize",
          });
        });

        setCategory(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          label="Add Product"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Category!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <input
          onChange={handlefile}
          type="file"
          accept="image/png, image/jpeg"
        />
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

export default AddProduct;
