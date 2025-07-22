import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { loginUser } from "../services/authService";
import FormWrapper from "./FormWrapper";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await loginUser({email, password})
    if (response.success){
        navigate("/profile")
    }else{
        alert(response.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCorCchd68isr1svOUwJJWjGj5P--K7GgXGg&s')] bg-cover bg-center h-screen">
    <FormWrapper title="Login">
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-700"
      >
        Login
      </button>
    </form>
  </FormWrapper>
  </div>
);
};

export default LoginPage;
