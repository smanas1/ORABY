import DashbordMenu from "@/Components/DashbordMenu";
import { Col, Row } from "antd";

export const metadata = {
  title: "Dashbord",
  description: "Oraby Dashbord",
};

const Layout = ({ children }) => {
  return (
    <Row>
      <Col span={4}>
        <DashbordMenu />
      </Col>
      <Col span={20}>{children}</Col>
    </Row>
  );
};

export default Layout;
