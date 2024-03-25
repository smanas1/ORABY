"use client";
import { Button, Input, Space } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

const ForgatePass = () => {
  const [password, setPassword] = useState("");
  const params = useParams();
  const router = useRouter();
  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/api/v1/auth/newpassword", {
        token: params.token,
        password: password,
      })
      .then((res) => {
        console.log(res);
        toast.success(res.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          router.push("/login");
        }, 2000);
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
    <div className="flex justify-center items-center h-screen flex-col">
      <ToastContainer />
      <div>
        <Space.Compact style={{ width: "100%" }}>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Your New Password"
          />
          <Button onClick={handleSubmit} ghost type="primary">
            Send
          </Button>
        </Space.Compact>
      </div>
    </div>
  );
};

export default ForgatePass;
