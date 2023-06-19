import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import Loginpage from "./pages/loginpage";
import Studentpage from "./pages/studentpage";
import Teacherpage from "./pages/managerpage";

const { Sider, Content } = Layout;

const MyLayout = () => (
  <Router>
    <Layout>
      <Sider>
        <Menu mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="/component1">Component 1</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/component2">Component 2</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/component3">Component 3</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content>
        <Route path="/login" component={Loginpage} />
        <Route path="/teacherpage" component={Studentpage} />
        <Route path="/studentpage" component={Teacherpage} />
      </Content>
    </Layout>
  </Router>
);

export default MyLayout;
