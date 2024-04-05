"use client";
import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
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
  getItem("Category", "sub3", <AppstoreOutlined />, [
    getItem("Add Category", "5"),
    getItem("View Category", "6"),
    getItem("Add Subcategory", "7"),
    getItem("View Subcategory", "8"),
  ]),
  getItem("Discount", "sub4", <AppstoreOutlined />, [
    getItem("Add Discount", "9"),
    getItem("View Discount", "10"),
  ]),
];
const DashbordMenu = () => {
  const onClick = (e) => {
    console.log("click ", e);
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
