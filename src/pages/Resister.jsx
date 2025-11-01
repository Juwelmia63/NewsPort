import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Resister = () => {
  const { createUser, setUser, updateDisplayName } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    if (name.length < 5) {
      setError("Name must be at least 5 characters long");
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must contain at least 6 chars, one uppercase & one lowercase"
      );
      return;
    }

    setError("");

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateDisplayName({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            alert(error);
          });

        // console.log(user);

        toast.success("Registration Successful ", {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="poppins-regular">
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col w-full max-w-md">
              <div className="card bg-base-100 w-full shadow-2xl p-6">
                <h2 className="text-2xl font-semibold text-center mb-4">
                  Register
                </h2>
                <div className="card-body">
                  <fieldset className="fieldset space-y-3">
                    <label className="label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="input input-bordered w-full"
                      placeholder="Name"
                      required
                    />
                    <label className="label">Photo URL</label>
                    <input
                      type="text"
                      name="photo"
                      className="input input-bordered w-full"
                      placeholder="Photo URL"
                    />
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
                    {error && (
                      <p className="text-red-500 text-sm text-center">
                        {error}
                      </p>
                    )}
                    <button className="btn btn-neutral w-full mt-4">
                      Register
                    </button>
                  </fieldset>
                  <p className="text-center text-sm mt-4">
                    Already have an account?{" "}
                    <Link
                      to="/auth/login"
                      className="text-red-600 font-semibold link link-hover"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Resister;
