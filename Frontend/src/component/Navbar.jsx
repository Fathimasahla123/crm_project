import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService"; // optional if you use it here

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser(); 
    navigate("/"); 
  };

  return (
    <nav className="bg-green-500 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <ul className="flex space-x-6 items-center">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/signup" className="hover:text-gray-300">Signup</Link></li>
          <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
          <li><Link to="/profile" className="hover:text-gray-300">Profile</Link></li>
          <li>
            <button
              onClick={handleLogout}
              className="bg-white text-green-600 px-3 py-1 rounded hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
