import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const AuthContext = React.createContext(null);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async () => {
    setUser({
      id: "1",
      name: "robin",
      permissions: ["analyze"],
      roles: ["admin"],
    });
    // @ts-ignore
    const origin = location.state?.from?.pathname || "/home";
    navigate(origin);
  };

  const handleLogout = () => setUser(null);

  const value = {
    user,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
