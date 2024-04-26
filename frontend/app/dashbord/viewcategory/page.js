'use client'
import { Table } from "antd";import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewCategory = () => {
  const [category,setCategory] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/product/allcategory')
    .then((res) => {
        const data = [];
        res.data.map((item) => {
            data.push({
                key: item.category,
                name: item.category,
                status: item.status
            });
        })
        
        setCategory(data)
    })
    .catch((err) => {console.log(err)});
},[])



const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    className:"capitalize"
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    className:"capitalize"
  },
  
];
  return <Table dataSource={category} columns={columns} />;
};

export default ViewCategory;
