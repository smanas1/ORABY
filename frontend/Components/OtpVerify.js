"use client";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Button, Checkbox, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";


const OtpVerify = () => {
  const getEmail = useSelector((state) => state.email.email)
  const router = useRouter();

  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post("http://localhost:8000/api/v1/auth/otpverify", {
        email: values.email || getEmail,
        otp: values.otp,
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

        router.push("/login");
      })
      .catch((err) => {
        console.log(err.response);
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
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 1000,
        minWidth: 500
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="on"

    >
      <ToastContainer />
      {
        getEmail ? <Input className="mb-6" placeholder="Basic usage" value={getEmail} /> : <Form.Item
          label="Email"
          value="waw"
          name="email"

          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      }

      <Form.Item
        label="OTP"
        name="otp"
        rules={[
          {

            required: true,
            message: "Please input your OTP!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" ghost htmlType="submit">
          Verify
        </Button>
      </Form.Item>
    </Form>
  );
};
export default OtpVerify;
