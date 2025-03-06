import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import ProfilePage from "./pages/Profile";
import LogoutPage from "./pages/Logout";
import PrivateRoute from "./component/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        
          <Navbar />
          <HomePage />
       
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <LoginPage />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Navbar />
        <SignupPage />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
      <PrivateRoute>
          <Navbar />
          <ProfilePage />
          </PrivateRoute>
      </>
    ),
  },
  {
    path: "/logout",
    element: (
      <>
        <Navbar />
        <LogoutPage />
      </>
    ),
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
