import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";

const Register = () => {
  const { registerUser, setUser } = useContext(AuthContext);

  console.log(registerUser);

  // FOR ERROR
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //   NAVIGATION
  const navigate = useNavigate();
  const location = useLocation();
  const back = location?.state?.from || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    // PASSWWORD VARIFICATION
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      setError(
        "Password should be 6 character, must have an Uppercase letter, a lower letter"
      );
      toast(
        "Password should be 6 character, must have an Uppercase letter, a lower letter"
      );
      return;
    }

    //  EMAIL VARIFICATION
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email)) {
      setError("Please enter a valid email address");
      toast.error("Please enter a valid email address");
      return;
    }

    setError("");
    setSuccess("");

    registerUser(email, password, photo, name)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });

        if (result.user) {
          navigate(back);
        }

        setSuccess("Registration Successful");
        toast("Registration Successful");
        setUser(result.user);
        return;
      })
      .catch((error) => {
        console.log(error.message);
        toast("Email already used");
      });
  };

  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="w-full"
                    alt="Sample image"
                  />
                </div>

                <div className="flex items-center rounded-b-lg lg:w-6/12 py-8 lg:rounded-e-lg lg:rounded-bl-none justify-center ">
                  <div className="px-4 py-6 md:mx-6 md:p-12 border rounded-lg lg:w-full">
                    <form onSubmit={handleRegister}>
                      <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
                        <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                          Register Now
                        </p>
                      </div>

                      <div
                        className="relative mb-6"
                        data-twe-input-wrapper-init
                      >
                        User Name:
                        <input
                          name="name"
                          type="text"
                          required
                          className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear   dark:text-white dark:autofill:shadow-autofill"
                          placeholder="User Name"
                        />
                      </div>

                      <div
                        className="relative mb-6"
                        data-twe-input-wrapper-init
                      >
                        Email:{" "}
                        <input
                          name="email"
                          type="email"
                          required
                          className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear   dark:text-white dark:autofill:shadow-autofill"
                          placeholder="Email address"
                        />
                      </div>

                      <div
                        className="relative mb-6"
                        data-twe-input-wrapper-init
                      >
                        Photo:{" "}
                        <input
                          type="url"
                          name="photo"
                          className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear   dark:text-white dark:autofill:shadow-autofill"
                          placeholder="photo"
                        />
                      </div>

                      <div
                        className="relative mb-6"
                        data-twe-input-wrapper-init
                      >
                        Password:{" "}
                        <input
                          type="password"
                          name="password"
                          required
                          className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear   dark:text-white dark:autofill:shadow-autofill"
                          id="exampleFormControlInput22"
                          placeholder="Password"
                        />
                      </div>

                      {/*  */}

                      <div className="text-center lg:text-left">
                        <button
                          type="submit"
                          className="btn inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          Register
                        </button>

                        {error && (
                          <small className="text-red-600">{error}</small>
                        )}

                        {success && (
                          <small className="text-green-600 font-semibold">
                            {success}
                          </small>
                        )}

                        <div className="flex items-center justify-between pb-6 mb-0 mt-2 pt-1">
                          <p className="mb-0 me-2 font-semibold ">
                            Already have and account?
                          </p>

                          <NavLink to="/login">
                            <button
                              type="button"
                              className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                              data-twe-ripple-init
                              data-twe-ripple-color="light"
                            >
                              Login
                            </button>
                          </NavLink>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;