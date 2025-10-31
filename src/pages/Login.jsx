import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen poppins-regular">
      <div className="hero-content flex-col w-full max-w-md">
        <div className="card bg-base-100 w-full shadow-2xl p-6">
          <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
          <div className="card-body">
            <fieldset className="fieldset space-y-3">
              <label className="label">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Email"
              />

              <label className="label">Password</label>
              <input
                type="password"
                className="input input-bordered w-full"
                placeholder="Password"
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
  );
};

export default Login;
