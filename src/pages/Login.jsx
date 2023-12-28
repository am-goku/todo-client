import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../services/apis/user-methods";
import { accessToken, refreshToken } from "../const/localStorage";
import authenticate from "../middleware/function/Authenticator";

function Login() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.userData);
  const emRef = useRef();
  const pwRef = useRef();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });

  const [error, setError] = useState("");

  useEffect(() => {
    emRef.current.value = "";
    pwRef.current.value = "";
  }, []);

  const handleSubmit = async () => {
    const email = emRef.current.value.trim();
    const password = pwRef.current.value.trim();

    if (email && password) {
      await userLogin({ email, password })
        .then((res) => {
          localStorage.setItem(accessToken, res?.tokens?.accessToken);
          localStorage.setItem(refreshToken, res?.tokens?.refreshToken);
          authenticate()
          navigate("/");
        })
        .catch((err) => {
          setError(err.message);
        });
    } else {
      setError('Please enter your credentials.')
    }
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="p-4 text-center gap-3 flex flex-col">
          <span className="text-xl font-mono font-semibold">Login</span>

          <div className="bulgeBox flex flex-col gap-5 rounded items-center">
            <input
              ref={emRef}
              type="email"
              name="email"
              id="email"
              autoComplete="on"
              className="rounded border-gray-400 h-10 px-3"
              required
            />
            <input
              ref={pwRef}
              type="password"
              name="password"
              id="password"
              autoComplete="on"
              className="rounded border-gray-400 h-10 px-3"
              required
            />
            {error && (
              <span className="text-sm text-red-300 font-mono">{error}</span>
            )}
            <button
              onClick={handleSubmit}
              className="bg-blue-300 w-fit px-4 py-1 rounded bulge"
            >
              Login
            </button>
            <span>
              New user?{" "}
              <a href="/signup" className="text-gray-400">
                Signup
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
