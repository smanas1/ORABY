"use client";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// Add Sub Category

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const onSearch = (value) => {
  console.log("search:", value);
};

const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const AddSubCategory = () => {
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post("http://localhost:8000/api/v1/product/addsubcategory", {
        subcategory: values.subcategory.toLowerCase(),
        categoryid: categoryId,
      })
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
  const onChange = (value) => {
    setCategoryId(value);
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

  console.log(categoryId);

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
          label="Add Sub Category"
          name="subcategory"
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
      <Select
        showSearch
        placeholder="Select a Category"
        optionFilterProp="children"
        select
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={category}
      />
    </div>
  );
};

export default AddSubCategory;
