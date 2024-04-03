import React from "react";
import { Col, Row } from "antd";
import DashbordMenu from "@/Components/DashbordMenu";
const Layout = ({ children }) => {
  return (
    <div>
      <Row>
        <Col span={5}>
          <DashbordMenu />
        </Col>
        <Col span={19}>{children}</Col>
      </Row>
    </div>
  );
};

export default Layout;
