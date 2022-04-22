import React, { useEffect } from "react";
import "./app.scss";
import { Home, Watch, Register, Login } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { ProtectedRoute } from "router/ProtectedRoute";

const App = () => {
  const [user, setUser] = React.useState({
    id: "1",
    name: "robin",
    permissions: ["analyze"],
    roles: ["admin"],
  });

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      const key = e.key;

      if (key === "z") {
        console.log("login ing");
        setUser({
          id: "1",
          name: "robin",
          permissions: ["analyze"],
          roles: ["admin"],
        });
        console.log("user ", user);
      } else if (key === "x") {
        console.log("logout");
        setUser(null);
      }
    });
  }, );

  const handleLogin = async () => {
    setUser({
      id: "1",
      name: "robin",
      permissions: ["analyze"],
      roles: ["admin"],
    });
  };

  const handleLogout = () => setUser(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute isAllowed={!!user}>
              <Home type="" />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          element={<ProtectedRoute isAllowed={!!user} children={undefined} />}
        >
          <Route path="movies" element={<Home type="movies" />} />
          <Route path="series" element={<Home type="series" />} />
        </Route>
        <Route
          path="/watch"
          element={
            <ProtectedRoute isAllowed={!!user && user.roles.includes("admin")}>
              <Watch />
            </ProtectedRoute>
          }
        />

        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
