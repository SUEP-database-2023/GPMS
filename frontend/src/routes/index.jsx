import AdminRoute from "./AdminRoute";
import TeacherRoute from "./TeacherRoute";
import StudentRoute from "./StudentRoute";
import { GenerateRoutes } from "../utils";

const AdminRoute = () => {
  return <PrivateRoute identity={0} component={AdminRoute} />;
};

const TeacherRoute = () => {
  return <PrivateRoute identity={1} component={TeacherRoute} />;
};

const StudentRoute = () => {
  return <PrivateRoute identity={2} component={StudentRoute} />;
};
export { AdminRoute, TeacherRoute, StudentRoute };
