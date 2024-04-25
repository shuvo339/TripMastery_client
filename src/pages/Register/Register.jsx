import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="card shrink-0 w-3/4 md:w-1/2 mx-auto shadow-2xl bg-base-100 mb-2 mt-12">
      <h2 className="text-2xl md:text-4xl font-semibold text-center">
        Register
      </h2>
      <form className="card-body space-y-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Please provide your name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Please provide your email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Please provide your photo url"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <div className="relative">
            <input
              type={showPassword? "text":"password"}
              name="password"
              placeholder="Please create password"
              className="input input-bordered w-full"
            />
            <span
              className="absolute top-1/3 right-3 text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white text-lg font-semibold bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80">
            Register
          </button>
        </div>
      </form>
      <p className="pb-3 px-6">
        Already have an account? Please{" "}
        <Link className="text-green-700 font-medium underline" to="/login">
          Login
        </Link>
      </p>

      <ToastContainer />
    </div>
  );
};

export default Register;
