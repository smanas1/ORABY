import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const ResendEmail = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    axios
      .post("http://localhost:8000/api/v1/auth/resendemail", {
        email: email,
      })

      .then((res) => {
        console.log(res);
        toast.success("Verification Email Send", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setConfirmLoading(false);
        setOpen(false);
      })

      .catch((err) => {
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
        console.log(err);
        setConfirmLoading(false);
      });
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" ghost onClick={showModal}>
        Resend Email
      </Button>
      <Modal
        okButtonProps={{ ghost: true }}
        title="Resend Verification Email"
        okText="Send"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Your Email"
        />
      </Modal>
    </>
  );
};
export default ResendEmail;
