import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../services/authService";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const profile = await getUserProfile();
        if (profile.success) {
          setIsAuthenticated(true);
        } else {
          navigate("/login"); // Redirect to login if not authenticated
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        navigate("/login"); // Redirect to login on error
      }
    };
    checkAuthentication();
  }, [navigate]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show a loading state
  }

  return isAuthenticated ? children : null; // Render children if authenticated
};

export default PrivateRoute;
