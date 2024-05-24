"use client";
import { Button, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewCategory = () => {
  const [category, setCategory] = useState([]);
  const [realtime, setTealtime] = useState(false);

  const handleAction = (action) => {
    axios
      .post("http://localhost:8000/api/v1/product/aprovecategory", {
        id: action.id,
        status: action.status,
      })
      .then((response) => {
        setTealtime((realtime) => !realtime);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (action) => {
    axios
      .delete(
        `http://localhost:8000/api/v1/product/deletecategory/${action.id}`
      )
      .then((response) => {
        setTealtime((realtime) => !realtime);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/product/allcategory")
      .then((res) => {
        const data = [];
        res.data.map((item) => {
          data.push({
            key: item.category,
            id: item._id,
            name: item.category,
            status: item.status,
          });
        });

        setCategory(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [realtime]);

  const columns = [
    {
      title: "Name",
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
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Button onClick={() => handleAction(record)}>
            {record.status == "waiting" ? "Accept" : "Reject"}
          </Button>
          <Button className="ml-3" onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </>
      ),
    },
  ];
  return <Table dataSource={category} columns={columns} />;
};

export default ViewCategory;
