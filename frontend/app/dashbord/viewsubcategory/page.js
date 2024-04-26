"use client";
import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewSubCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/product/allsubcategory")
      .then((res) => {
        const data = [];
        res.data.map((item) => {
          data.push({
            key: item.subcategory,
            name: item.subcategory,
            status: item.status,
            category: item.categoryid.category,
          });
        });

        setCategory(data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const columns = [
    {
      title: "Sub Category",
      dataIndex: "name",
      key: "name",
      className: "capitalize",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      className: "capitalize",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      className: "capitalize",
    },
  ];
  return <Table dataSource={category} columns={columns} />;
};

export default ViewSubCategory;
