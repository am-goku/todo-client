import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkEmail } from "../hooks/formValidator";
import { signup } from "../services/apis/user-methods";
import { accessToken, refreshToken } from "../const/localStorage";



function Signup() {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.userData);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  });


  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null)
  const [password, setPassword] = useState(null);


  const handleSubmit = () => {
    if(name && email && password) {
      if(checkEmail(email)){
        signup({ name, email, password })
          .then((res) => {
            localStorage.setItem(accessToken, res?.tokens?.accessToken);
            localStorage.setItem(refreshToken, res?.tokens?.refreshToken);
            navigate("/");
          })
          .catch((err) => {
            setError(err?.message);
          });
      } else {
        setError("Enter a valid email address");
      }
    } else {
      console.log(name, email, password);
      setError("All fields are mandatory")
    }
  }


  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-4 text-center gap-3 flex flex-col">
        <span className="text-xl font-mono font-semibold">Signup</span>

        <div className="bulgeBox flex flex-col gap-5 rounded items-center">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="rounded border-gray-400 h-10 px-3"
            onClick={(e) => setName(e.target.value.trim())}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="rounded border-gray-400 h-10 px-3"
            onClick={(e) => setEmail(e.target.value.trim())}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Passoword"
            className="rounded border-gray-400 h-10 px-3"
            onClick={(e) => setPassword(e.target.value.trim())}
            required
          />
          {error && (
            <span className="text-sm text-red-300 font-mono">{error}</span>
          )}

          <button
            onClick={handleSubmit}
            className="bg-blue-300 w-fit px-4 py-1 rounded bulge"
          >
            Signup
          </button>

          <span>
            Have an account?{" "}
            <a href="/login" className="text-gray-400">
              Login
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
