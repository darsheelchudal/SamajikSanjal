import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogin } from "../../state/index";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const loggedIn = await response.json();
      console.log("Login response:", loggedIn);

      if (loggedIn.user && loggedIn.token) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        navigate("/home");
      } else {
        throw new Error("Invalid login response. Missing user or token.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Login failed. Please check your email and password.");
    }
  };

  return (
    <>
      <div className="nav h-20 flex items-center justify-center border-2 bg-slate-200">
        <div className="logo">
          <h1 className="font-bold text-2xl text-blue-500">Interlinked</h1>
        </div>
      </div>
      <div className="form flex justify-center my-10">
        <div className="card h-[400px] w-[800px] border-2 p-10 rounded-2xl">
          <div className="header mb-10 font-bold text-blue-700">
            Welcome to Interlinked, A new social platform for Healthy
            Conversation
          </div>
          <div className="form w-100">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="border-2 bg-slate-100 w-[100%] h-[40px] pl-4 rounded-md shadow-md"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formValues.email}
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border-2 bg-slate-100 w-[100%] h-[40px] pl-4 rounded-md shadow-md"
                  placeholder="Password"
                  onChange={handleChange}
                  value={formValues.password}
                />
              </div>
              {error && <div className="mb-5 text-red-500">{error}</div>}
              <div className="mb-5">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white w-full rounded-lg h-10 my-4"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="">
              <h1>
                Don't have an account?
                <Link to="/signup">
                  <span className="mx-2 text-blue-500 font-semibold">
                    Sign up
                  </span>
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
