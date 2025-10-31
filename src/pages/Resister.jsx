import React, { useContext } from "react";
import { Form, Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Resister = () => {
  const { createUser, setUser } = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const Name = e.target.name.value;
    const Email = e.target.email.value;
    const Password = e.target.password.value;
    const Photo = e.target.name.value;
    // console.log({ Name, Email, Password, Photo });
    createUser(Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });

    // e.target.reset();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <div className="poppins-regular">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col w-full max-w-md">
            <div className="card bg-base-100 w-full shadow-2xl p-6">
              <h2 className="text-2xl font-semibold text-center mb-4">
                Resister
              </h2>
              <div className="card-body">
                <fieldset className="fieldset space-y-3">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full"
                    placeholder="Name"
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
                    className="input input-bordered w-full"
                    placeholder="Email"
                    name="email"
                  />

                  <label className="label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input input-bordered w-full"
                    placeholder="Password"
                  />

                  <button className="btn btn-neutral w-full mt-4">
                    Resister
                  </button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Resister;
