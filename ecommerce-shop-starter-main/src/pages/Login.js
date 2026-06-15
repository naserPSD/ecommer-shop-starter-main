import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const success = await login(email, password);
    if (success) {
      navigate("/");
    } else {
      alert("Email or password is incorrect!");
    }
  };
  return (
    <section className="h-screen flex justify-center items-center bg-pink-100">
      <div className="border flex flex-col gap-4 w-80 p-6 rounded-lg shadow-md bg-blue-200">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded  bg-green-100"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded bg-green-100"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-green-500 text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </section>
  );
};

export default Login;
