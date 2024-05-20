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
  {
    title: "Description",
    key: "des",
    render: (_, record) => (
      <Space size="middle">
        <div dangerouslySetInnerHTML={{ __html: record.des }}></div>
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
          const oembedRegex = /<oembed[^>]*>/g;
          const oembedMatch = item.des?.match(oembedRegex);
          if (oembedMatch) {
            const oembedUrl = oembedMatch[0].match(/url="([^"]*)"/)[1];

            const iframeElement = `<iframe src="https://www.youtube.com/embed/${
              oembedUrl.includes("watch")
                ? oembedUrl.split("v=").pop()
                : oembedUrl.split("/").pop()
            }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            item.des = item.des?.replace(oembedRegex, iframeElement);
          }

          data.push({
            key: item._id,
            name: item.name,
            image: item.image,
            des: item.des,
          });
        });
        console.log(data);
        setData(data);
      });
  }, []);
  return <Table columns={columns} dataSource={data} />;
};
export default AllProduct;
