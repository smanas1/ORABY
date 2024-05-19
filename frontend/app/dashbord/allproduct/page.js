"use client";
import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import axios from "axios";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Image",
    key: "image",
    render: (_, record) => (
      <Space size="middle">
        <img
          className="w-16 "
          src={`http://localhost:8000${record.image}`}
          alt="img"
        />
      </Space>
    ),
  },
];

const AllProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/product/viewallproduct")
      .then((res) => {
        console.log(res.data);
        const data = [];
        res.data.map((item) => {
          data.push({
            key: item._id,
            name: item.name,
            image: item.image,
          });
        });
        console.log(data);
        setData(data);
      });
  }, []);
  return <Table columns={columns} dataSource={data} />;
};
export default AllProduct;
