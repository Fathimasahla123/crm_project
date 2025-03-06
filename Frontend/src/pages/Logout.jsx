import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { loginUser } from "../services/authService";
const LogoutPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const response = await loginUser({email, password})
    if (response.success){
        navigate("/")
    }else{
        alert(response.message)
    }
  }

  return (
    <div>
      <h1>Logout</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Logout</button>
      </form>
    </div>
  );
};

export default LogoutPage;