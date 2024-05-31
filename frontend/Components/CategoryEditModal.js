import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import axios from "axios";
const CategoryEditModal = ({ values, realtime, setTealtime }) => {
  console.log(values);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [category, setCategory] = useState(values.name);
  console.log(category);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    axios
      .post("http://localhost:8000/api/v1/product/updatecategory", {
        category: category,
        id: values.id,
      })
      .then((response) => {
        console.log(response);
        setTealtime((realtime) => !realtime);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button className="ml-3" onClick={showModal}>
        Edit
      </Button>
      <Modal
        title="Category Update"
        open={isModalOpen}
        onOk={handleOk}
        okType=""
        onCancel={handleCancel}
      >
        <Input
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          value={category}
        />
      </Modal>
    </>
  );
};
export default CategoryEditModal;
