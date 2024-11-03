import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Submission from "./pages/Submission";
import Student from "./pages/Student";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgetPassword from "./pages/ForgetPassword";
import Course from "./pages/Course";
import Assignment from "./pages/Assignment";
import Profile from "./pages/Profile";
import useRole from "./hooks/useRole";
import { Role } from "./types/Role";

interface Props {
  component: React.ComponentType;
  path?: string;
  roles: Role[];
}

export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
  roles,
}) => {
  const { role } = useRole();
  const userHasRequiredRole = roles.includes(role) ? true : false;

  if (userHasRequiredRole) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Course />} />
          <Route path="/course/:id" element={<Assignment />} />
          <Route
            path="/submission"
            element={
              <PrivateRoute roles={[Role.Student]} component={Submission} />
            }
          />
          <Route
            path="/assignment"
            element={
              <PrivateRoute
                roles={[Role.Student, Role.Teacher]}
                component={Assignment}
              />
            }
          />
          <Route path="/course/:id/students" element={<Student />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
