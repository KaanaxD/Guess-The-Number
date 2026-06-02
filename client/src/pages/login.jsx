import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../service/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/api/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.result.token);

      navigate("/game");

      console.log("TOKEN DISIMPAN");
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <main className="bg-gray-950 min-h-screen flex items-center justify-center">
      {/* Card Container */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-white mb-4">
          Login
        </h2>

        <form>
          {/* Username Field */}
          <div className="mb-4">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="bg-gray-700 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="bg-gray-700 text-gray-300 placeholder:text-gray-500 border border-gray-600 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Button Container */}
          <div className="flex flex-col justify-evenly gap-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
            <Link to="/register">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 w-full"
                type="button"
              >
                Sign up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
