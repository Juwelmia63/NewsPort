import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLoginForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((userCredential) => {
        toast.success("Login Successful", {
          position: "top-right",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <>
      <form onSubmit={handleLoginForm}>
        <div className="hero bg-base-200 min-h-screen poppins-regular">
          <div className="hero-content flex-col w-full max-w-md">
            <div className="card bg-base-100 w-full shadow-2xl p-6">
              <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
              <div className="card-body">
                <fieldset className="fieldset space-y-3">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full"
                    placeholder="Email"
                    required
                  />

                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input input-bordered w-full"
                    placeholder="Password"
                    required
                  />

                  <div className="flex justify-between text-sm mt-1">
                    <a className="link text-blue-500 hover:underline">
                      Forgot password?
                    </a>
                  </div>

                  <button className="btn btn-neutral w-full mt-4">Login</button>
                </fieldset>

                <p className="text-center text-sm mt-4">
                  Don’t have an account?{" "}
                  <Link
                    to="/auth/resister"
                    className="text-red-600 font-semibold link link-hover"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>

      <ToastContainer />
    </>
  );
};

export default Login;
