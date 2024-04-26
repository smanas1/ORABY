"use client";
import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  FireOutlined,
  AlignLeftOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useRouter } from "next/navigation";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Users", "sub1", <MailOutlined />, [
    getItem("Add User", "1"),
    getItem("View User", "2"),
  ]),
  getItem("Product", "sub2", <AppstoreOutlined />, [
    getItem("Add Product", "3"),
    getItem("View Product", "4"),
  ]),
  {
    type: "divider",
  },
  getItem("Category", "sub3", <AlignLeftOutlined />, [
    getItem("Add Category", "/dashbord/addcategory"),
    getItem("View Category", "/dashbord/viewcategory"),
    getItem("Add Subcategory", "/dashbord/addsubcategory"),
    getItem("View Subcategory", "/dashbord/viewsubcategory"),
  ]),
  getItem("Discount", "sub4", <FireOutlined />, [
    getItem("Add Discount", "9"),
    getItem("View Discount", "10"),
  ]),
];
const DashbordMenu = () => {
  const router = useRouter();
  const onClick = (e) => {
    console.log("click ", e);
    router.push(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};
export default DashbordMenu;
