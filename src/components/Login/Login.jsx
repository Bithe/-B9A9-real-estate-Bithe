import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import SocialLogin from "./SocialLogin";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";


import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  console.log(loginUser);

  // FOR ERROR
  const [error, setError] = useState("");

  // FOR SHOW PASSWORD
  const [showPassword, setShowPassword] = useState(false);

  //   NAVIGATION
  const navigate = useNavigate();
  const location = useLocation();
  const back = location?.state?.from || "/";

  // FUNC FOR LOGIN SUBMIT
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   console.log(email, password);

  //   setError("");

  //   loginUser(email, password)
  //     .then((result) => {
  //       console.log(result.user);
  //       toast("Login Successful");

  //       if (result.user) {
  //         navigate(back);
  //       }
  //       return;
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       setError("Incorrect email or password");
  //     });
  // };

  // REACT HOOK FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast("Login Successful");

        if (result.user) {
          navigate(back);
        }
        return;
      })
      .catch((error) => {
        console.log(error.message);
        setError("Incorrect email or password");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Hoas | Login</title>
      </Helmet>

      <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
        <div className="container h-full p-10">
          <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="/login.png"
                          alt="logo"
                        />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          Login{" "}
                        </h4>
                      </div>

                      {/* <form onSubmit={handleLogin}> */}
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="mb-4">Please login to your account</p>

                        <div
                          className="relative mb-6"
                          data-twe-input-wrapper-init
                        >
                          Email:{" "}
                          <input
                            name="email"
                            type="email"
                            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear   dark:text-white dark:autofill:shadow-autofill"
                            placeholder="Email address"
                            {...register("email", { required: true })}
                          />
                          {errors.email && (
                            <span className="text-red-500 font-bold ">
                              Please give a valid email
                            </span>
                          )}
                        </div>

                        <div
                          className="relative mb-6"
                          data-twe-input-wrapper-init
                        >
                          Password:{" "}
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear   dark:text-white dark:autofill:shadow-autofill"
                              id="exampleFormControlInput22"
                              placeholder="Password"
                              {...register("password", { required: true })}
                            />
                            {/* SHOW PASSWORD ICON */}
                            <span
                              className="absolute inset-y-0 right-0 flex px-2 items-center justify-end "
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>

                            {errors.password && (
                              <span className="text-red-500 font-bold ">
                                Please give a valid password
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xl font-bold uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            type="submit"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Log in
                          </button>
                        </div>
                        {error && (
                          <small className="text-red-600">{error}</small>
                        )}
                      </form>

                      {/* GITHUB LOGIN */}
                      <SocialLogin></SocialLogin>

                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 me-2">Dont have any account?</p>

                        <NavLink to="/register">
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xl font-bold uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                          >
                            Register
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        Welcome Back to Our Hoas Housing Portal!<br></br>
                        Sign in to access your account and manage your housing
                        preferences seamlessly.
                      </h4>
                      <p className="text-sm">
                        Keep track of your favorite listings and preferences for
                        quick access. Get Special Offers after login to our
                        site.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
